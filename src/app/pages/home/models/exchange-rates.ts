export interface ExchangeRates {
  [key: string]: KeyValue[];
}

interface KeyValue {
  key: string;
  rate: number;
}
