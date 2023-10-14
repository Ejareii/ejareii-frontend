import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo,useEffect,useState } from "react";
import { toast } from "react-hot-toast";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: any | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  // console.log("testt")
  const router = useRouter();

  const loginModal = useLoginModal();


  const [hasFavorited, setHasFavorited] = useState<boolean>(false);

useEffect(() => {
  if (currentUser) {
    axios.get(`http://localhost:9000/v1/user/${currentUser.user_id}`)
      .then(response => {
        const user = response.data;
        const list = user?.favoriteIds || [];
        setHasFavorited(list.includes(listingId));
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }
}, [currentUser, listingId]);

const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();

  if (!currentUser) {
    return loginModal.onOpen();
  }

  try {
    let request;

    if (hasFavorited) {
      console.log(`http://localhost:9000/v1/user/${currentUser.user_id}/${listingId}`)
      request = () => axios.delete(`http://localhost:9000/v1/user/${currentUser.user_id}/${listingId}`);
    } else {
      console.log(`http://localhost:9000/v1/user/${currentUser.user_id}/${listingId}`)
      request = () => axios.post(`http://localhost:9000/v1/user/${currentUser.user_id}/${listingId}`);
    }

    await request();
    router.refresh();
    toast.success('Success');
  } catch (error) {
    toast.error('Something went wrong.');
  }
}, 
[
  currentUser, 
  hasFavorited, 
  listingId, 
  loginModal,
  router
]);



  return {
    hasFavorited,
    toggleFavorite
  }
}

export default useFavorite;
