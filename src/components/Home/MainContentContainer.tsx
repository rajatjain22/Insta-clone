import SuggestionContainer from './SuggestionContainer';
import SliderContainer from '../StorySlider/SliderContainer';
import PostContainer from './PostContainer';
import SwiperSliderContainer from '../StorySlider/SwiperSliderContainer';
import ModelContainer from '../Model/ModelContainer';

export default function MainContentContainer() {
	return (
		<div className='flex w-full h-screen justify-around overflow-y-scroll overflow-x-hidden'>
			<div className='w-full md:max-w-[490px]'>
				{/* <SliderContainer /> */}
				<ModelContainer />
				<SwiperSliderContainer />
				{new Array(11).fill(0).map((val, index) => (
					<PostContainer key={index} imageKey={index + 1}/>
				))}
			</div>
			<SuggestionContainer />
		</div>
	);
}
