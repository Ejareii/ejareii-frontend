'use client';

import EmptyState from "@/src/shared/components/common/EmptyState";
import { useEffect } from "react";



interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error,"dfdfdfdfd");
  }, [error]);

  return ( 
    <EmptyState
      title="اوه اوه"
      subtitle="مشکلی پیش آمد!"
    />
   );
}
 
export default ErrorState;
