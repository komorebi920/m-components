interface City {
  id?: number
  spell?: string
  name: string
}

interface Province {
  name: string
  data: string[]
}

export type { City, Province }
