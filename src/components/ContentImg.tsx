import type { ImgHTMLAttributes } from 'react';
import type { ContentImage } from '../types/content.ts';

type ContentImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  image: ContentImage;
};

export default function ContentImg({ image, ...rest }: ContentImgProps) {
  return <img src={image.src} srcSet={image.srcSet} {...rest} />;
}
