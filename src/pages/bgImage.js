import LottieAnimation from '../Lottie';
import background from '../Animations/background.json';

export default function bgImage(){
	return(
		<LottieAnimation lotti={background} height={300} width={1000} />
	);
}