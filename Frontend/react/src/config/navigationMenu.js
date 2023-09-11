export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://www.kalyanjewellers.net/images/menu-banner/brands/glo-2.gif',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Trending Jewellery',
            href: '/',
            imageSrc: 'https://www.kalyanjewellers.net/images/menu-banner/brands/apoorva-2.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'jewellery',
            name: 'Jewellery',
            items: [
              { name: 'EarRings', id:"chain", href: `{women/jewellery/chains}` },
              { name: 'Rings', id:"women_dress", href: '#' },
              { name: 'Necklaces & Pendants', id: 'women_jeans' },
              { name: 'Bracelets', id: 'lengha_choli' },
              { name: 'Anklets', id: 'sweater' },
              { name: 'Mangalsutra', id: 't-shirt' },
              { name: 'Chains', id: 'jacket' },
              { name: 'Toe Rings', id: 'gouns' },
              { name: 'Nose Pin & Rings', id: 'saree' },
              { name: 'All', id: 'kurtas' },
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: 'watch' },
          //     { name: 'Wallets', id: 'wallet' },
          //     { name: 'Bags', id: 'bag' },
          //     { name: 'Sunglasses', id: 'sunglasse' },
          //     { name: 'Hats', id: 'hat' },
          //     { name: 'Belts', id: 'belt' },
          //   ],
          // },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://cdn-media.glamira.com/media/wysiwyg/men-newlp/men1.jpg',
            imageAlt: 'New Arrival in mens Jewellery',
          },
          {
            name: 'Artwork Jewellery',
            id: '#',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQySTDokYhkSnAu8htIP-mbHpRHpHrZWtbg&usqp=CAU',
            imageAlt:
              'New artwork mens jewellery.',
          },
        ],
        sections: [
          {
            id: 'jewellery',
            name: 'Mens Jewellery',
            items: [
              { name: 'EarRings', id: 'mens_earing' },
              { name: 'Bracelets', id: 'bracelets' },
              { name: 'Chains', id: 'men_chains' },
              { name: 'Cuff', id: 'mens_cuff' },
              { name: 'Kadas', id: 'kadas' },
              { name: 'Pendants', id: 'mens_pendants' },
              { name: 'All', id: 'show_all' },
              
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: '#' },
          //     { name: 'Wallets', id: '#' },
          //     { name: 'Bags', id: '#' },
          //     { name: 'Sunglasses', id: '#' },
          //     { name: 'Hats', id: '#' },
          //     { name: 'Belts', id: '#' },
          //   ],
          // },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      // { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }