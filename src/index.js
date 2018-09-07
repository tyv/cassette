import AudioPlayer from './AudioPlayer';
import PlayerContextProvider from './PlayerContextProvider';
import PlayerContext from './PlayerContext';
import PlayPauseButton from './controls/PlayPauseButton';
import BackSkipButton from './controls/BackSkipButton';
import ForwardSkipButton from './controls/ForwardSkipButton';
import VolumeControl from './controls/VolumeControl';
import RepeatButton from './controls/RepeatButton';
import ShuffleButton from './controls/ShuffleButton';
import AudioProgress from './controls/AudioProgress';
import VideoDisplay from './controls/VideoDisplay';
import ProgressBar from './controls/common/ProgressBar';
import ProgressBarDisplay from './controls/common/ProgressBarDisplay';
import playerContextFilter from './factories/playerContextFilter';

export default AudioPlayer;
export { AudioPlayer };
export { PlayerContextProvider };
export const PlayerContextConsumer = PlayerContext.Consumer;
export { PlayPauseButton };
export { BackSkipButton };
export { ForwardSkipButton };
export { VolumeControl };
export { RepeatButton };
export { ShuffleButton };
export { AudioProgress };
export { VideoDisplay };
export { ProgressBar };
export { ProgressBarDisplay };
export { playerContextFilter };

// for browser script tag (global var) usage
AudioPlayer.PlayerContextProvider = PlayerContextProvider;
AudioPlayer.PlayerContextConsumer = PlayerContext.Consumer;
AudioPlayer.PlayPauseButton = PlayPauseButton;
AudioPlayer.BackSkipButton = BackSkipButton;
AudioPlayer.ForwardSkipButton = ForwardSkipButton;
AudioPlayer.VolumeControl = VolumeControl;
AudioPlayer.RepeatButton = RepeatButton;
AudioPlayer.ShuffleButton = ShuffleButton;
AudioPlayer.AudioProgress = AudioProgress;
AudioPlayer.VideoDisplay = VideoDisplay;
AudioPlayer.ProgressBar = ProgressBar;
AudioPlayer.ProgressBarDisplay = ProgressBarDisplay;
AudioPlayer.playerContextFilter = playerContextFilter;
