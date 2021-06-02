import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm dark:bg-gray-850">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium dark:text-gray-200">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400 dark:text-gray-300">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-300">
                Loading...
              </p>
            )}
          </div>
        </div>

        <p className="pt-4 dark:text-gray-100">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white dark:bg-gray-400">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* Post Footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t dark:border-gray-700 dark:bg-gray-850">
        <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4 dark:text-gray-300" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon p-3 rounded-none">
          <ChatAltIcon className="h-4 dark:text-gray-300" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon p-3 rounded-none rounded-br-2xl">
          <ShareIcon className="h-4 dark:text-gray-300" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
