import { StarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const INR_RATE = 14.5;
const FALLBACK_IMAGE = '/assets/banner-airbnb.png';

const formatInr = (value: number) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(value * INR_RATE);

const getImageUrl = (images: { url?: string }[] = [], index = 0) => {
  const url = images[index]?.url;
  return url && url.trim() ? url : FALLBACK_IMAGE;
};

export default function Property({PropertiesProps}: any ) {
    const router = useRouter();
    const imageUrl = getImageUrl(PropertiesProps.images);

      return (
        <div
        onClick={() => {
          router.push({
         pathname: '/rooms',
         query: {
           name: PropertiesProps.name,
           id: PropertiesProps.id,
         }
        })}
        }
          className='grid cursor-pointer'   key={PropertiesProps.id}>
            <img
              className='rounded-md w-full h-[305px] object-cover'
              src={imageUrl}
              alt={PropertiesProps.name}
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                if (target.src !== window.location.origin + FALLBACK_IMAGE) {
                  target.src = FALLBACK_IMAGE;
                }
              }}
            />
             <h5 className='font-semibold'>{PropertiesProps.name}</h5>
              <p>{PropertiesProps.localization}</p>  
            <div className="flex justify-between text-center items-center">
              <p>{formatInr(PropertiesProps.price)}
              / night</p>
            <div className="rating flex items-center">
              {PropertiesProps.rating ? <p>{PropertiesProps?.rating}</p>    : 'New'}
              <StarIcon className='h-4 text-black' />
            </div>
          </div>
        </div>
  )
}
