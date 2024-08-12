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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (currentUser) {
    axios.get(`${apiUrl}/v1/user/${currentUser.user_id}`)
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
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let request;

    if (hasFavorited) {
      request = () => axios.delete(`${apiUrl}/v1/user/${currentUser.user_id}/${listingId}`);
    } else {
      request = () => axios.post(`${apiUrl}/v1/user/${currentUser.user_id}/${listingId}`);
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
