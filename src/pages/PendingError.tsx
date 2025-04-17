import serverErrorAnimation from "@public/pending-animation.json";
import Lottie from "react-lottie";

import ErrorPage from "./Error";

export default function PendingErrorPage() {
  return (
    <ErrorPage
      LottieAnimation={() => (
        <Lottie
          speed={2}
          options={{
            loop: true,
            autoplay: true,
            animationData: serverErrorAnimation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={340}
          width={340}
        />
      )}
      title="Tính năng đang trong quá trình phát triển"
      descriptions={[
        "Đội phát triển của chúng mình đang nỗ lực làm việc để hoàn thiện tính năng này",
        "Trong lúc chờ đợi, bạn có thể đi pha một cốc trà hoặc luyện đề thi"
      ]}
      showHomeButton
    />
  );
}
