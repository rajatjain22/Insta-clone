import SuggestionContainer from './SuggestionContainer';
import SliderContainer from '../StorySlider/SliderContainer';
import PostContainer from './PostContainer';

export default function MainContentContainer() {
	return (
		<div className='flex h-screen w-full justify-around overflow-y-scroll'>
			<div className='w-11/12 md:max-w-[490px] flex flex-col items-center'>
				<SliderContainer />
				{new Array(20).fill(0).map((val, index) => (
					<PostContainer key={index} />
				))}
			</div>
			<SuggestionContainer />
		</div>
	);
}
