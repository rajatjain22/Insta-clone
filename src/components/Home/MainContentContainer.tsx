import SuggestionContainer from './SuggestionContainer';
import SliderContainer from '../StorySlider/SliderContainer';
import PostContainer from './PostContainer';
import SwiperSliderContainer from '../StorySlider/SwiperSliderContainer';

export default function MainContentContainer() {
	return (
		<div className='flex w-full h-screen justify-around overflow-y-scroll overflow-x-hidden'>
			<div className='w-11/12 md:max-w-[490px]'>
				{/* <SliderContainer /> */}
				<SwiperSliderContainer />
				{new Array(20).fill(0).map((val, index) => (
					<PostContainer key={index} imageKey={index + 1}/>
				))}
			</div>
			<SuggestionContainer />
		</div>
	);
}
