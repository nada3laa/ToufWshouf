import img1 from '@/assets/images/products/1.jpg';
import img2 from '@/assets/images/products/2.jpg';
import img3 from '@/assets/images/products/3.jpg';
import img4 from '@/assets/images/products/4.jpg';
import img5 from '@/assets/images/products/5.jpg';
import img6 from '@/assets/images/products/6.jpg';

interface Supplement {
  type: string;
  price: number;
}
export interface Product {
  id: number;
  // type:
  //   | 'OUTINGS'
  //   | 'HOTEL'
  //   | 'RESTAURANT'
  //   | 'NILE_CRUISE'
  //   | 'PACKAGES'
  //   | 'TRANSPORTATION'
  //   | 'TAILORED_SERVICE';
  title: string;
  rating: number;
  price?: number;
  mainImage: string;
  offerPrice?: number | null;
  overview?: string;
  // supplement: Supplement[];
  // photoGallery: [];
  // reviews: [];
  // keywords: '';
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Sidi El Zouk ',
    rating: 1.5,
    price: 850,
    mainImage: img1.src,
    offerPrice: null,
    overview: `A journey through history starting from the gates of Fatimid Cairo at Bab al-Futuh, passing through our monuments and stories of Egyptian history and heritage From Bab Al-Futuh, through the story of Sidi El-Zouk, passing by Al-Hakim Mosque, Bamir Allah, to the house of Al-Suhaimi ** Prices include: * Entrance tickets * Arab guide * Prices do not include any meals or drinks`,
  },
  {
    id: 2,
    title: 'The Great Traitor',
    rating: 4.5,
    price: 850,
    mainImage: img2.src,
    offerPrice: null,
  },
  {
    id: 3,
    title: 'From Qalawun to Ainal',
    rating: 3.5,
    price: 850,
    mainImage: img3.src,
    offerPrice: null,
  },
  {
    id: 4,
    title: 'Kanater',
    rating: 3,
    price: 850,
    mainImage: img4.src,
    offerPrice: 700,
  },
  {
    id: 5,
    title: 'Bond and Harafesh ',
    rating: 2,
    price: 850,
    mainImage: img5.src,
    offerPrice: 700,
  },
  {
    id: 6,
    title: 'Manyal Palace ',
    rating: 4,
    price: 850,
    mainImage: img6.src,
    offerPrice: 700,
  },
];
