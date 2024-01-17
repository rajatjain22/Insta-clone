import SideNavContainer from '@/components/SideNav/SideNavContainer';
import SuggestionContainer from './SuggestionContainer';
import SliderContainer from '../StorySlider/SliderContainer';

export default function MainContentContainer() {
	return (
		<div className='flex min-h-screen w-full justify-around'>
			<div className='w-full max-w-[630px] flex justify-center'>
				<SliderContainer />
			</div>
			<SuggestionContainer />
		</div>
	);
}
