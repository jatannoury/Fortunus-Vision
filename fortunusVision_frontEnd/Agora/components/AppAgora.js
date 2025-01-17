import React, { useRef, useCallback, useEffect, useState } from "react";
import RtcEngine from "react-native-agora";
import { useDispatch, useSelector } from "react-redux";
import { addCallHistory, triggerPhoneCall } from "../../redux/users";
import GettingCall from "../../screens/GettingCall";
import { addHistory, triggerCall } from "../../utils/http";
import { requestAudioPermission } from "../Permission";

const AppAgora = ({ navigation, route, Name }) => {
  useEffect(() => {
    async () => {
      await initAgora();
      joinChannel();
    };
  }, []);
  
  let name = Name;
  if (name === undefined) {
    name = route.params.expertName;
  }
  let userId = useSelector((state) => state.user.userId);
  let userType = useSelector((state) =>state.user.userType)
  let expert_id = userType === 0 ? route.params.expert_id : 0;
  let phonePrice = userType === 0 ? route.params.phonePrice : 0;
  console.log("phonePricephonePrice",userType,phonePrice)
  let dispatch = useDispatch();
  requestAudioPermission();
  const appId = "455c2d5179604814ae6fc8fbbd65a29b";
  const token =
    "006455c2d5179604814ae6fc8fbbd65a29bIAD4JMnmPPtg5yKs/2KYErS7AuJbBKcwDhhrgSUIH/bEJmWPLkIAAAAAEABUJOp9+23lYgEAAQD6beVi";
  const channelName = "FortunusVision";
  const rtcEngine = useRef(null);
  const [joinSuceed, setJoinSucceed] = useState(false);
  const [peerIds, setPeerIds] = useState([]);
  const [isMute, setIsMute] = useState(false);
  const [isSpeakerEnable, setIsSpeakerEnable] = useState(false);
  let index = userType === 0 ? route.params.index : 0;
  const initAgora = useCallback(async () => {
    rtcEngine.current = await RtcEngine.create(appId);
    await rtcEngine.current?.enableAudio();
    await rtcEngine.current?.setEnableSpeakerphone(true);
    await rtcEngine.current?.muteLocalAudioStream(false);
  }, []);
  rtcEngine.current?.addListener(
    "JoinChannelSuccess",
    (channel, uid, elapsed) => {
      console.log("JoinChannelSuccess", channel, uid, elapsed);

      setJoinSucceed(true);
      setPeerIds([...peerIds, uid]);
    }
  );
  rtcEngine.current?.addListener("Warning", (warn) => {
    console.log("Warning", warn);
  });
  rtcEngine.current?.addListener("Error", (err) => {
    console.log("Error", err);
  });

  rtcEngine.current?.addListener("UserJoined", (uid, elapsed) => {
    console.log("UserJoined", uid, elapsed);

    if (peerIds.indexOf(uid) === -1) {
      console.log("USER JOINED");
      setPeerIds([...peerIds, uid]);
    }
  });

  rtcEngine.current?.addListener("UserOffline", (uid, reason) => {
    console.log("UserOffline", uid, reason);

    setPeerIds(peerIds.filter((id) => id !== uid));
  });
  const joinChannel = useCallback(async () => {
    console.log("JOINED");
    await addHistory(userId,name,phonePrice)
    dispatch(addCallHistory([{name:name,price:phonePrice}]))
    userType === 0 ? await triggerCall(expert_id, name, 1) : "";
    await rtcEngine.current?.joinChannel(token, channelName, null, 0);
  }, [channelName]);
  const leaveChannel = useCallback(async () => {
    
    await rtcEngine.current?.leaveChannel();
    setPeerIds([]);
    setJoinSucceed(false);
    await destroyAgoraEngine();
    console.log("BYEEEEE");
    dispatch(triggerPhoneCall(0));
    await triggerCall(userId, "", 0);
    navigation.navigate("RatingScreen", { expert_id, index });
  }, []);
  const toggleIsMute = useCallback(async () => {
    await rtcEngine.current?.muteLocalAudioStream(!isMute);
    setIsMute(!isMute);
  }, [isMute]);
  const toggleIsSpeakerEnable = useCallback(async () => {
    await rtcEngine.current?.setEnableSpeakerphone(!isSpeakerEnable);
    setIsSpeakerEnable(!isSpeakerEnable);
  }, [isSpeakerEnable]);
  const destroyAgoraEngine = useCallback(async () => {
    await rtcEngine.current?.destroy();
  }, [destroyAgoraEngine, initAgora]);

  useEffect(() => {
    console.log("INITIALIZED");
    initAgora();
    rtcEngine.current?.GetEngine(appId);
  }, []);
  return (
    <GettingCall
      startCall={joinChannel}
      endCall={leaveChannel}
      navigation={navigation}
      name={name}
    />
  );
};

export default AppAgora;
