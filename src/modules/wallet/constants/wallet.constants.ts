import { IconTokenSend, IconTokenReceive, IconTokenView } from '@src/core'

export const dataBtnWallet = [
  { title: 'send' },
  { title: 'receive' },
  { title: 'scan' }
]

export const dataCoin = [
  { id: 0, value: "BTC", name: 'Bitcoin', img: 'https://bitcoin.org/img/icons/opengraph.png?1648897668', coin: '$8,210.45' },
  { id: 1, value: "ETH", name: 'Ethereum', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjVlcaPh8YNP8TZwzCXttgtL19b0hOfhVNQ&usqp=CAU', coin: '$14,480.25' },
  { id: 2, value: "USDT", name: 'Tether', img: 'data:image/jpeg;base64,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', coin: '$14,480.25' },
  { id: 3, value: "ADA", name: 'Cardano', img: 'https://media.istockphoto.com/photos/cardano-coin-cryptocurrency-3d-render-picture-id915940762?b=1&k=20&m=915940762&s=170667a&w=0&h=fXnuoRTNirHEPM9oxuLNgKK1XmkYfGtkBOAxuS7nBsQ=', coin: '$8,210.45' },
  { id: 4, value: "CML", name: 'Camelcoin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-BRJcbZTvydJYLNw1Je1sJVGE78QZSsMDw&usqp=CAU', coin: '$8,210.45' },
  { id: 5, value: "BTC", name: 'Bitcoin', img: 'https://bitcoin.org/img/icons/opengraph.png?1648897668', coin: '$8,210.45' },
  { id: 6, value: "ETH", name: 'Ethereum', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjVlcaPh8YNP8TZwzCXttgtL19b0hOfhVNQ&usqp=CAU', coin: '$8,210.45' },
  { id: 7, value: "USDT", name: 'Tether', img: 'data:image/jpeg;base64,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', coin: '$14,480.25' },
  { id: 8, value: "ADA", name: 'Cardano', img: 'https://media.istockphoto.com/photos/cardano-coin-cryptocurrency-3d-render-picture-id915940762?b=1&k=20&m=915940762&s=170667a&w=0&h=fXnuoRTNirHEPM9oxuLNgKK1XmkYfGtkBOAxuS7nBsQ=', coin: '$8,210.45' },
  { id: 9, value: "CML", name: 'Camelcoin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-BRJcbZTvydJYLNw1Je1sJVGE78QZSsMDw&usqp=CAU', coin: '$8,210.45' },
  { id: 10, value: "BTC", name: 'Bitcoin', img: 'https://bitcoin.org/img/icons/opengraph.png?1648897668', coin: '$8,210.45' },
  { id: 11, value: "ETH", name: 'Ethereum', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjVlcaPh8YNP8TZwzCXttgtL19b0hOfhVNQ&usqp=CAU', coin: '$8,210.45' },
  { id: 12, value: "USDT", name: 'Tether', img: 'data:image/jpeg;base64,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', coin: '$14,480.25' },
  { id: 13, value: "ADA", name: 'Cardano', img: 'https://media.istockphoto.com/photos/cardano-coin-cryptocurrency-3d-render-picture-id915940762?b=1&k=20&m=915940762&s=170667a&w=0&h=fXnuoRTNirHEPM9oxuLNgKK1XmkYfGtkBOAxuS7nBsQ=', coin: '$8,210.45' },
  { id: 14, value: "CML", name: 'Camelcoin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-BRJcbZTvydJYLNw1Je1sJVGE78QZSsMDw&usqp=CAU', coin: '$8,210.45' },
]

export const dataNetwork = [
  { name: 'The artwork astronaut', url: 'https://media.istockphoto.com/photos/space-portal-tunnel-with-cosmonaut-corridor-picture-id1296760535?b=1&k=20&m=1296760535&s=170667a&w=0&h=8ihFYjrLA7ApP81iiDAEAeSSZDUxleQOmnJln43FqAM=' },
  { name: 'The abstract art', url: 'https://media.istockphoto.com/photos/modern-abstract-wavy-background-picture-id1356565274?b=1&k=20&m=1356565274&s=170667a&w=0&h=DmUGKAV8M2EAfZBIVZS90SChW_VYwf-JvJ9Nbr3YNyA=' },
  { name: 'Camel#1234', url: 'https://images.unsplash.com/photo-1489161587020-79aa193f04ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZWwlMjMxMjM0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  { name: 'CamelArt#010', url: 'https://media.istockphoto.com/photos/decorated-camels-in-rann-utsav-at-white-rann-of-kutch-picture-id1321292335?b=1&k=20&m=1321292335&s=170667a&w=0&h=iMNDMw5tQZnEJqMO_GwmyaNfzn8Hr_S-yE7RtnJpDUA=' },
  { name: 'Camel#1234', url: 'https://media.istockphoto.com/photos/camel-cart-in-dessert-at-sunset-picture-id1074143924?b=1&k=20&m=1074143924&s=170667a&w=0&h=2VojAItEf_lQQRiYmprtaj3yubhg_1X-E23fDo_iaH4=' },
  { name: 'CamelArt#010', url: 'https://media.istockphoto.com/photos/camel-and-the-pyramids-in-giza-picture-id1139238705?b=1&k=20&m=1139238705&s=170667a&w=0&h=xq2ykORROSwHdQyhtKEtHD6PSO4vTa197NRgOWZl2vk=' }
]

export const listNetwork = [
  { title: 'Cadarno Blockchain', isSelected: true },
  { title: 'Camelink Blockchain', isSelected: false }
]

export const tokenActions = [
  { title: 'send', des: 'des_token_send', Icon: IconTokenSend },
  { title: 'receive', des: 'des_token_receive', Icon: IconTokenReceive },
  { title: 'view', des: 'des_token_view', Icon: IconTokenView }
]

export const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]