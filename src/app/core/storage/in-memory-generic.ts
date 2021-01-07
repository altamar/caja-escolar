import  { InMemoryKeys} from './in-memory-key';

export class InMemoryGeneric<T> {
      constructor( public key:InMemoryKeys , public dataType:T ){  }
}
