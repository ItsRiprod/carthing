
import { IconMicDiscord } from '@spotify-internal/encore-web';
import { IconSize } from '@spotify-internal/encore-web/types/src/core/components/Icon/Svg';

interface Props {
    className?: string;
    iconSize: number;
}

const IconMic = ({ className, iconSize }: Props) => (
    <IconMicDiscord
        className={className}
        iconSize={iconSize as IconSize} 
        />
);

export default IconMic;