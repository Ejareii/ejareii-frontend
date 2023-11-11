import ProfileMainComp from "@/src/modules/profile";

interface IParams {
  userID?: string;
}

const ProfilePage = async () => {
  return (
    <ProfileMainComp/>
  );
};

export default ProfilePage;
