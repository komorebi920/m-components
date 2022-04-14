interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

interface Data {
  name: string
  code: string
}

export type { AreaItem, Data }
