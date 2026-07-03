import profileAvatar from '../images/profile-avatar.png';

type ProfileAvatarIconProps = {
  className?: string;
};

export default function ProfileAvatarIcon({ className = 'h-full w-full' }: ProfileAvatarIconProps) {
  return (
    <img
      className={`object-cover ${className}`.trim()}
      src={profileAvatar}
      alt=""
      loading="eager"
      decoding="async"
    />
  );
}
