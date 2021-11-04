export enum RouteStatus {
  New = 0,
  Pending = 1,
  Scheduled = 2,
  InProgress = 3,
  Completed = 4,
}
export enum StopStatus {
  New = 0,
  Pending = 1,
  Scheduled = 2,
  InProgress = 3,
  Completed = 4,
}
export enum OrderStatus {
  New = 0,
  Pending = 1,
  Scheduled = 2,
  InProgress = 3,
  Completed = 4,
}
export enum OrderType {
  Pickup = 0,
  Dropoff = 1,
}

/* eslint-disable camelcase */

export interface StopAddress {
  house_number: string
  street: string
  town: string
  postal_code: string
  country: string
  lat: number
  lon: number
}

export interface Order {
  order_id: string
  stream_product_id: number
  stream_type: string
  quantity: number
  size: number
  status: OrderStatus
  type: OrderType
}

export interface Stop {
  stop_id: number
  status: StopStatus
  name: string
  comment: null | string
  avatar: null
  telephone: null | string
  address: StopAddress
  eta: string
  time_start: string
  time_end: string
  orders: Order[]
}

export interface GarageAddress {
  street: string
  house_number: number
  town: string
  postal_code: string
  country: string
  lat: number
  lon: number
}

export interface Garage {
  status: number
  orgloc_id: string
  name: string
  avatar: null
  telephone: null
  address: GarageAddress
  time_start: string
  time_end: string
  orders: any[]
  dropoff: boolean
  stop_id?: number
  eta?: string
}

export interface Stops {
  stops: Stop[]
  name: string
  orglog_id: string
  vehicle_id: string
  driver_id: string
  time_start: string
  time_end: string
  status: RouteStatus
  depots: Garage[]
  garage: Garage
  _created: string
  _modified: string
  _active: boolean
}

export const state = (): Stops => ({
  stops: [
    {
      stop_id: 1,
      status: 4,
      name: 'De Koffie Place',
      comment: null,
      avatar: null,
      telephone: null,
      address: {
        house_number: '82',
        street: 'Eerste Constantijn Huygensstraat ',
        town: 'Amsterdam',
        postal_code: '1054 BV',
        country: 'NL',
        lat: 52.3632668,
        lon: 4.874626600000001,
      },
      eta: '2021-03-24T09:00:00.000Z',
      time_start: '2021-03-24T09:00:00.000Z',
      time_end: '2021-03-24T12:00:00.000Z',
      orders: [
        {
          order_id: '000000007',
          stream_product_id: 6,
          stream_type: 'sinaasappelschillen',
          quantity: 1,
          size: 20,
          status: 4,
          type: 0,
        },
        {
          order_id: '000000006',
          stream_product_id: 7,
          stream_type: 'koffiedrab',
          quantity: 1,
          size: 20,
          status: 4,
          type: 0,
        },
      ],
    },
    {
      stop_id: 2,
      status: 2,
      name: 'De Other Koffie Place',
      comment: 'Emmers omwisselen. ',
      avatar: null,
      telephone: null,
      address: {
        house_number: '42',
        street: 'Ten Kate straat ',
        town: 'Amsterdam',
        postal_code: '1053 CG',
        country: 'NL',
        lat: 52.36607,
        lon: 4.8672816,
      },
      eta: '2021-03-24T09:00:00.000Z',
      time_start: '2021-03-24T09:00:00.000Z',
      time_end: '2021-03-24T12:00:00.000Z',
      orders: [
        {
          order_id: '000000004',
          stream_product_id: 7,
          stream_type: 'koffiedrab',
          quantity: 1,
          size: 20,
          status: 4,
          type: 0,
        },
        {
          order_id: '000000005',
          stream_product_id: 6,
          stream_type: 'sinaasappelschillen',
          quantity: 1,
          size: 20,
          status: 4,
          type: 0,
        },
      ],
    },
    {
      stop_id: 3,
      status: 2,
      name: 'Hip Coffee',
      comment: null,
      avatar: null,
      telephone: null,
      address: {
        house_number: '268',
        street: 'Van Hall straat ',
        town: 'Amsterdam',
        postal_code: '1051 HM',
        country: 'NL',
        lat: 52.379399299999996,
        lon: 4.8714727,
      },
      eta: '2021-03-24T09:00:00.000Z',
      time_start: '2021-03-24T09:00:00.000Z',
      time_end: '2021-03-24T12:00:00.000Z',
      orders: [
        {
          order_id: '000000003',
          stream_product_id: 6,
          stream_type: 'sinaasappelschillen',
          quantity: 1,
          size: 20,
          status: 2,
          type: 0,
        },
        {
          order_id: '000000004',
          stream_product_id: 6,
          stream_type: 'sinaasappelschillen',
          quantity: 2,
          size: 20,
          status: 2,
          type: 1,
        },
        {
          order_id: '000000002',
          stream_product_id: 7,
          stream_type: 'koffiedrab',
          quantity: 1,
          size: 20,
          status: 2,
          type: 0,
        },
      ],
    },
    {
      stop_id: 4,
      status: 2,
      name: 'More Coffee Shop WEST',
      comment:
        'Emmers koffiedroes omwisselen. Standaard 5 lege emmers leveren. Standaard 4 volle emmers meenemen.',
      avatar: null,
      telephone: '061234567',
      address: {
        house_number: '136',
        street: 'Jan Evertsen straat ',
        town: 'Amsterdam',
        postal_code: '1056 EK',
        country: 'NL',
        lat: 52.3704227,
        lon: 4.8516071,
      },
      eta: '2021-03-24T09:00:00.000Z',
      time_start: '2021-03-24T09:00:00.000Z',
      time_end: '2021-03-24T12:00:00.000Z',
      orders: [
        {
          order_id: '000000001',
          stream_product_id: 7,
          stream_type: 'koffiedrab',
          quantity: 5,
          size: 20,
          status: 2,
          type: 1,
        },
        {
          order_id: '000000002',
          stream_product_id: 7,
          stream_type: 'koffiedrab',
          quantity: 4,
          size: 20,
          status: 2,
          type: 0,
        },
      ],
    },
  ],
  name: 'WED-MIX-1',
  orglog_id: '601bfbef6af612b189747282',
  vehicle_id: '6037ef261da175c57c72ab89',
  driver_id: '6037ebb81da175c57c72ab88',
  time_start: '2021-03-24T09:00:00.000Z',
  time_end: '2021-03-24T16:15:00.000Z',
  status: 0,
  depots: [
    {
      status: 2,
      orgloc_id: '',
      name: 'Depot',
      avatar: null,
      telephone: null,
      address: {
        street: 'Seineweg',
        house_number: 10,
        town: 'Amsterdam',
        postal_code: '1043BG',
        country: 'NL',
        lat: 52.388266,
        lon: 4.817649,
      },
      time_start: '08:30',
      time_end: '16:00',
      orders: [],
      dropoff: true,
    },
  ],
  garage: {
    status: 2,
    orgloc_id: '',
    name: 'Garage',
    avatar: null,
    telephone: null,
    address: {
      street: 'Kriekenoord',
      house_number: 3,
      town: 'Diemen',
      postal_code: '1111PT',
      country: 'NL',
      lat: 52.388266,
      lon: 4.817649,
    },
    time_start: '2021-03-24T08:00:00.000Z',
    time_end: '2021-03-24T16:15:00.000Z',
    orders: [],
    dropoff: true,
    stop_id: 19,
    eta: '2021-03-24T16:15:00.000Z',
  },
  _created: '2021-03-19T13:38:47.721Z',
  _modified: '2021-03-24T09:34:16.588Z',
  _active: true,
})

export const getters = {
  getStop: (state: Stops) => (stopId: number) => {
    return state.stops[stopId]
  },
  getOrdersOfStop: (state: Stops) => (stopId: number) => {
    return state.stops[stopId].orders
  },
  getCompletedOrdersOfStop:
    (state: Stops) =>
    (stopId = 0) => {
      return state.stops[stopId].orders.filter(
        (order) => order.status === OrderStatus.Completed
      )
    },
}

export const mutations = {
  // increment(state) {
  //   state.counter++
  // },
  updateOrderStatus(
    state: Stops,
    payload: { orderId: string; status: OrderStatus }
  ) {
    const { orderId, status } = payload

    const stopIndex = state.stops.findIndex((stop) =>
      stop.orders.find((order) => order.order_id === orderId)
    )

    if (stopIndex === -1) {
      throw new TypeError('Could not find stop id with that order')
    }

    const orderIndex = state.stops[stopIndex].orders.findIndex(
      (order) => order.order_id === orderId
    )

    state.stops[stopIndex].orders[orderIndex].status = status
  },
}
