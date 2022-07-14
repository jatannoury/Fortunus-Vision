import React from "react";

const ProfilePicture = ({ path }) => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.profileImage} source={require(path)} />
    </View>
  );
};

export default ProfilePicture;
