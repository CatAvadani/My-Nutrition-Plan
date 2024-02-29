import { ButtonStyled } from "../components/styles/ButtonStyled.styled";
import {
  CenterContainer,
  ExploreStyled,
  InfoContainer,
  VideoContainer,
} from "../components/styles/Explore.styled";

export default function Explore() {
  return (
    <ExploreStyled>
      <CenterContainer>
        <VideoContainer>
          <video autoPlay loop muted playsInline className='video-background'>
            <source
              src='/AdobeStock_304598901_Video_HD_Preview.mov'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>
        <InfoContainer>
          <h2>Here you can find new recipes and explore different cuisines.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            malesuada, libero nec fermentum luctus, odio libero ultricies
            libero, vitae fermentum libero libero sit amet libero.
          </p>
          <ButtonStyled className='exploreBtn'>Explore</ButtonStyled>
        </InfoContainer>
      </CenterContainer>
    </ExploreStyled>
  );
}
