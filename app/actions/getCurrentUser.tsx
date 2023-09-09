import Cookies from 'js-cookie';

export default  function getCurrentUser() {
    const token =  Cookies.get("token")
    console.log(token,"ss")
    // if (!token) {
    //   return null;
    // }
    return token;

//     const currentUser = await prisma.user.findUnique({
//       where: {
//         email: session.user.email as string,
//       }
//     });

//     if (!currentUser) {
//       return null;
//     }

//     return {
//       ...currentUser,
//       createdAt: currentUser.createdAt.toISOString(),
//       updatedAt: currentUser.updatedAt.toISOString(),
//       emailVerified: 
//         currentUser.emailVerified?.toISOString() || null,
//     };
//   } catch (error: any) {
//     return null;
//   }}
  }

