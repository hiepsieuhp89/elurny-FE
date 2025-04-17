interface ErrorPageProps {
  Image: React.FC;
  title: string;
  descriptions: string[];
}

export default function ErrorPage({
  Image,
  title,
  descriptions,
}: ErrorPageProps) {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center relative">
          <Image />
          <div className="text-2xl text-grayV2-800 absolute bottom-1">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-grayV2-400 text-[16px] leading-6">
          {descriptions.map((description, index) => <div key={index}>{description}</div>)}
        </div>
      </div>
    </div>
  );
}
