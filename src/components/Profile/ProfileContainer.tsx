import SwiperSliderContainer from '../StorySlider/SwiperSliderContainer';
import ProfileName from './ProfileName';
import ProfilePost from './profilePost';

export default function ProfileContainer() {
	return (
		<div className='flex flex-col items-center h-screen w-full overflow-scroll'>
			<div className='w-full lg:px-32 pt-7'>
				<div className='mb-8'>
					<ProfileName />
				</div>
				<div className='mb-6'>
					<SwiperSliderContainer />
				</div>
				<ProfilePost />
			</div>
		</div>
	);
}
