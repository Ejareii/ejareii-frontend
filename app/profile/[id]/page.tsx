import ProfileMainComp from "@/src/modules/profile";

interface IParams {
  userID?: string;
}

const ProfilePage = async ({ userID }: IParams) => {
  return (
    <ProfileMainComp/>
  );
};

export default ProfilePage;
