
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SiteMessage
 * 
 */
export type SiteMessage = $Result.DefaultSelection<Prisma.$SiteMessagePayload>
/**
 * Model SiteImage
 * 
 */
export type SiteImage = $Result.DefaultSelection<Prisma.$SiteImagePayload>
/**
 * Model SiteColor
 * 
 */
export type SiteColor = $Result.DefaultSelection<Prisma.$SiteColorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SiteMessages
 * const siteMessages = await prisma.siteMessage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SiteMessages
   * const siteMessages = await prisma.siteMessage.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.siteMessage`: Exposes CRUD operations for the **SiteMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteMessages
    * const siteMessages = await prisma.siteMessage.findMany()
    * ```
    */
  get siteMessage(): Prisma.SiteMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteImage`: Exposes CRUD operations for the **SiteImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteImages
    * const siteImages = await prisma.siteImage.findMany()
    * ```
    */
  get siteImage(): Prisma.SiteImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteColor`: Exposes CRUD operations for the **SiteColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteColors
    * const siteColors = await prisma.siteColor.findMany()
    * ```
    */
  get siteColor(): Prisma.SiteColorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SiteMessage: 'SiteMessage',
    SiteImage: 'SiteImage',
    SiteColor: 'SiteColor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "siteMessage" | "siteImage" | "siteColor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SiteMessage: {
        payload: Prisma.$SiteMessagePayload<ExtArgs>
        fields: Prisma.SiteMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          findFirst: {
            args: Prisma.SiteMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          findMany: {
            args: Prisma.SiteMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>[]
          }
          create: {
            args: Prisma.SiteMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          createMany: {
            args: Prisma.SiteMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>[]
          }
          delete: {
            args: Prisma.SiteMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          update: {
            args: Prisma.SiteMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          deleteMany: {
            args: Prisma.SiteMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>[]
          }
          upsert: {
            args: Prisma.SiteMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMessagePayload>
          }
          aggregate: {
            args: Prisma.SiteMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteMessage>
          }
          groupBy: {
            args: Prisma.SiteMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SiteMessageCountAggregateOutputType> | number
          }
        }
      }
      SiteImage: {
        payload: Prisma.$SiteImagePayload<ExtArgs>
        fields: Prisma.SiteImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          findFirst: {
            args: Prisma.SiteImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          findMany: {
            args: Prisma.SiteImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>[]
          }
          create: {
            args: Prisma.SiteImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          createMany: {
            args: Prisma.SiteImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>[]
          }
          delete: {
            args: Prisma.SiteImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          update: {
            args: Prisma.SiteImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          deleteMany: {
            args: Prisma.SiteImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>[]
          }
          upsert: {
            args: Prisma.SiteImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteImagePayload>
          }
          aggregate: {
            args: Prisma.SiteImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteImage>
          }
          groupBy: {
            args: Prisma.SiteImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteImageCountArgs<ExtArgs>
            result: $Utils.Optional<SiteImageCountAggregateOutputType> | number
          }
        }
      }
      SiteColor: {
        payload: Prisma.$SiteColorPayload<ExtArgs>
        fields: Prisma.SiteColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          findFirst: {
            args: Prisma.SiteColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          findMany: {
            args: Prisma.SiteColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>[]
          }
          create: {
            args: Prisma.SiteColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          createMany: {
            args: Prisma.SiteColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteColorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>[]
          }
          delete: {
            args: Prisma.SiteColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          update: {
            args: Prisma.SiteColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          deleteMany: {
            args: Prisma.SiteColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteColorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>[]
          }
          upsert: {
            args: Prisma.SiteColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteColorPayload>
          }
          aggregate: {
            args: Prisma.SiteColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteColor>
          }
          groupBy: {
            args: Prisma.SiteColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteColorCountArgs<ExtArgs>
            result: $Utils.Optional<SiteColorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    siteMessage?: SiteMessageOmit
    siteImage?: SiteImageOmit
    siteColor?: SiteColorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SiteMessage
   */

  export type AggregateSiteMessage = {
    _count: SiteMessageCountAggregateOutputType | null
    _min: SiteMessageMinAggregateOutputType | null
    _max: SiteMessageMaxAggregateOutputType | null
  }

  export type SiteMessageMinAggregateOutputType = {
    id: string | null
    page: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMessageMaxAggregateOutputType = {
    id: string | null
    page: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMessageCountAggregateOutputType = {
    id: number
    page: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteMessageMinAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMessageMaxAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMessageCountAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteMessage to aggregate.
     */
    where?: SiteMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMessages to fetch.
     */
    orderBy?: SiteMessageOrderByWithRelationInput | SiteMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteMessages
    **/
    _count?: true | SiteMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMessageMaxAggregateInputType
  }

  export type GetSiteMessageAggregateType<T extends SiteMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteMessage[P]>
      : GetScalarType<T[P], AggregateSiteMessage[P]>
  }




  export type SiteMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteMessageWhereInput
    orderBy?: SiteMessageOrderByWithAggregationInput | SiteMessageOrderByWithAggregationInput[]
    by: SiteMessageScalarFieldEnum[] | SiteMessageScalarFieldEnum
    having?: SiteMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteMessageCountAggregateInputType | true
    _min?: SiteMessageMinAggregateInputType
    _max?: SiteMessageMaxAggregateInputType
  }

  export type SiteMessageGroupByOutputType = {
    id: string
    page: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SiteMessageCountAggregateOutputType | null
    _min: SiteMessageMinAggregateOutputType | null
    _max: SiteMessageMaxAggregateOutputType | null
  }

  type GetSiteMessageGroupByPayload<T extends SiteMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SiteMessageGroupByOutputType[P]>
        }
      >
    >


  export type SiteMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMessage"]>

  export type SiteMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMessage"]>

  export type SiteMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMessage"]>

  export type SiteMessageSelectScalar = {
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "page" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["siteMessage"]>

  export type $SiteMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      page: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteMessage"]>
    composites: {}
  }

  type SiteMessageGetPayload<S extends boolean | null | undefined | SiteMessageDefaultArgs> = $Result.GetResult<Prisma.$SiteMessagePayload, S>

  type SiteMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteMessageCountAggregateInputType | true
    }

  export interface SiteMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteMessage'], meta: { name: 'SiteMessage' } }
    /**
     * Find zero or one SiteMessage that matches the filter.
     * @param {SiteMessageFindUniqueArgs} args - Arguments to find a SiteMessage
     * @example
     * // Get one SiteMessage
     * const siteMessage = await prisma.siteMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteMessageFindUniqueArgs>(args: SelectSubset<T, SiteMessageFindUniqueArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteMessageFindUniqueOrThrowArgs} args - Arguments to find a SiteMessage
     * @example
     * // Get one SiteMessage
     * const siteMessage = await prisma.siteMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageFindFirstArgs} args - Arguments to find a SiteMessage
     * @example
     * // Get one SiteMessage
     * const siteMessage = await prisma.siteMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteMessageFindFirstArgs>(args?: SelectSubset<T, SiteMessageFindFirstArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageFindFirstOrThrowArgs} args - Arguments to find a SiteMessage
     * @example
     * // Get one SiteMessage
     * const siteMessage = await prisma.siteMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteMessages
     * const siteMessages = await prisma.siteMessage.findMany()
     * 
     * // Get first 10 SiteMessages
     * const siteMessages = await prisma.siteMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteMessageWithIdOnly = await prisma.siteMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteMessageFindManyArgs>(args?: SelectSubset<T, SiteMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteMessage.
     * @param {SiteMessageCreateArgs} args - Arguments to create a SiteMessage.
     * @example
     * // Create one SiteMessage
     * const SiteMessage = await prisma.siteMessage.create({
     *   data: {
     *     // ... data to create a SiteMessage
     *   }
     * })
     * 
     */
    create<T extends SiteMessageCreateArgs>(args: SelectSubset<T, SiteMessageCreateArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteMessages.
     * @param {SiteMessageCreateManyArgs} args - Arguments to create many SiteMessages.
     * @example
     * // Create many SiteMessages
     * const siteMessage = await prisma.siteMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteMessageCreateManyArgs>(args?: SelectSubset<T, SiteMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteMessages and returns the data saved in the database.
     * @param {SiteMessageCreateManyAndReturnArgs} args - Arguments to create many SiteMessages.
     * @example
     * // Create many SiteMessages
     * const siteMessage = await prisma.siteMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteMessages and only return the `id`
     * const siteMessageWithIdOnly = await prisma.siteMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteMessage.
     * @param {SiteMessageDeleteArgs} args - Arguments to delete one SiteMessage.
     * @example
     * // Delete one SiteMessage
     * const SiteMessage = await prisma.siteMessage.delete({
     *   where: {
     *     // ... filter to delete one SiteMessage
     *   }
     * })
     * 
     */
    delete<T extends SiteMessageDeleteArgs>(args: SelectSubset<T, SiteMessageDeleteArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteMessage.
     * @param {SiteMessageUpdateArgs} args - Arguments to update one SiteMessage.
     * @example
     * // Update one SiteMessage
     * const siteMessage = await prisma.siteMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteMessageUpdateArgs>(args: SelectSubset<T, SiteMessageUpdateArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteMessages.
     * @param {SiteMessageDeleteManyArgs} args - Arguments to filter SiteMessages to delete.
     * @example
     * // Delete a few SiteMessages
     * const { count } = await prisma.siteMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteMessageDeleteManyArgs>(args?: SelectSubset<T, SiteMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteMessages
     * const siteMessage = await prisma.siteMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteMessageUpdateManyArgs>(args: SelectSubset<T, SiteMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteMessages and returns the data updated in the database.
     * @param {SiteMessageUpdateManyAndReturnArgs} args - Arguments to update many SiteMessages.
     * @example
     * // Update many SiteMessages
     * const siteMessage = await prisma.siteMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteMessages and only return the `id`
     * const siteMessageWithIdOnly = await prisma.siteMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteMessage.
     * @param {SiteMessageUpsertArgs} args - Arguments to update or create a SiteMessage.
     * @example
     * // Update or create a SiteMessage
     * const siteMessage = await prisma.siteMessage.upsert({
     *   create: {
     *     // ... data to create a SiteMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteMessage we want to update
     *   }
     * })
     */
    upsert<T extends SiteMessageUpsertArgs>(args: SelectSubset<T, SiteMessageUpsertArgs<ExtArgs>>): Prisma__SiteMessageClient<$Result.GetResult<Prisma.$SiteMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageCountArgs} args - Arguments to filter SiteMessages to count.
     * @example
     * // Count the number of SiteMessages
     * const count = await prisma.siteMessage.count({
     *   where: {
     *     // ... the filter for the SiteMessages we want to count
     *   }
     * })
    **/
    count<T extends SiteMessageCountArgs>(
      args?: Subset<T, SiteMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteMessageAggregateArgs>(args: Subset<T, SiteMessageAggregateArgs>): Prisma.PrismaPromise<GetSiteMessageAggregateType<T>>

    /**
     * Group by SiteMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteMessageGroupByArgs['orderBy'] }
        : { orderBy?: SiteMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteMessage model
   */
  readonly fields: SiteMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteMessage model
   */
  interface SiteMessageFieldRefs {
    readonly id: FieldRef<"SiteMessage", 'String'>
    readonly page: FieldRef<"SiteMessage", 'String'>
    readonly key: FieldRef<"SiteMessage", 'String'>
    readonly value: FieldRef<"SiteMessage", 'String'>
    readonly createdAt: FieldRef<"SiteMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteMessage findUnique
   */
  export type SiteMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter, which SiteMessage to fetch.
     */
    where: SiteMessageWhereUniqueInput
  }

  /**
   * SiteMessage findUniqueOrThrow
   */
  export type SiteMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter, which SiteMessage to fetch.
     */
    where: SiteMessageWhereUniqueInput
  }

  /**
   * SiteMessage findFirst
   */
  export type SiteMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter, which SiteMessage to fetch.
     */
    where?: SiteMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMessages to fetch.
     */
    orderBy?: SiteMessageOrderByWithRelationInput | SiteMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteMessages.
     */
    cursor?: SiteMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteMessages.
     */
    distinct?: SiteMessageScalarFieldEnum | SiteMessageScalarFieldEnum[]
  }

  /**
   * SiteMessage findFirstOrThrow
   */
  export type SiteMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter, which SiteMessage to fetch.
     */
    where?: SiteMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMessages to fetch.
     */
    orderBy?: SiteMessageOrderByWithRelationInput | SiteMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteMessages.
     */
    cursor?: SiteMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteMessages.
     */
    distinct?: SiteMessageScalarFieldEnum | SiteMessageScalarFieldEnum[]
  }

  /**
   * SiteMessage findMany
   */
  export type SiteMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter, which SiteMessages to fetch.
     */
    where?: SiteMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMessages to fetch.
     */
    orderBy?: SiteMessageOrderByWithRelationInput | SiteMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteMessages.
     */
    cursor?: SiteMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMessages.
     */
    skip?: number
    distinct?: SiteMessageScalarFieldEnum | SiteMessageScalarFieldEnum[]
  }

  /**
   * SiteMessage create
   */
  export type SiteMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteMessage.
     */
    data: XOR<SiteMessageCreateInput, SiteMessageUncheckedCreateInput>
  }

  /**
   * SiteMessage createMany
   */
  export type SiteMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteMessages.
     */
    data: SiteMessageCreateManyInput | SiteMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteMessage createManyAndReturn
   */
  export type SiteMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SiteMessages.
     */
    data: SiteMessageCreateManyInput | SiteMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteMessage update
   */
  export type SiteMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteMessage.
     */
    data: XOR<SiteMessageUpdateInput, SiteMessageUncheckedUpdateInput>
    /**
     * Choose, which SiteMessage to update.
     */
    where: SiteMessageWhereUniqueInput
  }

  /**
   * SiteMessage updateMany
   */
  export type SiteMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteMessages.
     */
    data: XOR<SiteMessageUpdateManyMutationInput, SiteMessageUncheckedUpdateManyInput>
    /**
     * Filter which SiteMessages to update
     */
    where?: SiteMessageWhereInput
    /**
     * Limit how many SiteMessages to update.
     */
    limit?: number
  }

  /**
   * SiteMessage updateManyAndReturn
   */
  export type SiteMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * The data used to update SiteMessages.
     */
    data: XOR<SiteMessageUpdateManyMutationInput, SiteMessageUncheckedUpdateManyInput>
    /**
     * Filter which SiteMessages to update
     */
    where?: SiteMessageWhereInput
    /**
     * Limit how many SiteMessages to update.
     */
    limit?: number
  }

  /**
   * SiteMessage upsert
   */
  export type SiteMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteMessage to update in case it exists.
     */
    where: SiteMessageWhereUniqueInput
    /**
     * In case the SiteMessage found by the `where` argument doesn't exist, create a new SiteMessage with this data.
     */
    create: XOR<SiteMessageCreateInput, SiteMessageUncheckedCreateInput>
    /**
     * In case the SiteMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteMessageUpdateInput, SiteMessageUncheckedUpdateInput>
  }

  /**
   * SiteMessage delete
   */
  export type SiteMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
    /**
     * Filter which SiteMessage to delete.
     */
    where: SiteMessageWhereUniqueInput
  }

  /**
   * SiteMessage deleteMany
   */
  export type SiteMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteMessages to delete
     */
    where?: SiteMessageWhereInput
    /**
     * Limit how many SiteMessages to delete.
     */
    limit?: number
  }

  /**
   * SiteMessage without action
   */
  export type SiteMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMessage
     */
    select?: SiteMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMessage
     */
    omit?: SiteMessageOmit<ExtArgs> | null
  }


  /**
   * Model SiteImage
   */

  export type AggregateSiteImage = {
    _count: SiteImageCountAggregateOutputType | null
    _min: SiteImageMinAggregateOutputType | null
    _max: SiteImageMaxAggregateOutputType | null
  }

  export type SiteImageMinAggregateOutputType = {
    id: string | null
    originalKey: string | null
    currentPath: string | null
    altText: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type SiteImageMaxAggregateOutputType = {
    id: string | null
    originalKey: string | null
    currentPath: string | null
    altText: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type SiteImageCountAggregateOutputType = {
    id: number
    originalKey: number
    currentPath: number
    altText: number
    uploadedAt: number
    updatedAt: number
    _all: number
  }


  export type SiteImageMinAggregateInputType = {
    id?: true
    originalKey?: true
    currentPath?: true
    altText?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type SiteImageMaxAggregateInputType = {
    id?: true
    originalKey?: true
    currentPath?: true
    altText?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type SiteImageCountAggregateInputType = {
    id?: true
    originalKey?: true
    currentPath?: true
    altText?: true
    uploadedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteImage to aggregate.
     */
    where?: SiteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteImages to fetch.
     */
    orderBy?: SiteImageOrderByWithRelationInput | SiteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteImages
    **/
    _count?: true | SiteImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteImageMaxAggregateInputType
  }

  export type GetSiteImageAggregateType<T extends SiteImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteImage[P]>
      : GetScalarType<T[P], AggregateSiteImage[P]>
  }




  export type SiteImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteImageWhereInput
    orderBy?: SiteImageOrderByWithAggregationInput | SiteImageOrderByWithAggregationInput[]
    by: SiteImageScalarFieldEnum[] | SiteImageScalarFieldEnum
    having?: SiteImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteImageCountAggregateInputType | true
    _min?: SiteImageMinAggregateInputType
    _max?: SiteImageMaxAggregateInputType
  }

  export type SiteImageGroupByOutputType = {
    id: string
    originalKey: string
    currentPath: string
    altText: string
    uploadedAt: Date
    updatedAt: Date
    _count: SiteImageCountAggregateOutputType | null
    _min: SiteImageMinAggregateOutputType | null
    _max: SiteImageMaxAggregateOutputType | null
  }

  type GetSiteImageGroupByPayload<T extends SiteImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteImageGroupByOutputType[P]>
            : GetScalarType<T[P], SiteImageGroupByOutputType[P]>
        }
      >
    >


  export type SiteImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalKey?: boolean
    currentPath?: boolean
    altText?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteImage"]>

  export type SiteImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalKey?: boolean
    currentPath?: boolean
    altText?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteImage"]>

  export type SiteImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalKey?: boolean
    currentPath?: boolean
    altText?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteImage"]>

  export type SiteImageSelectScalar = {
    id?: boolean
    originalKey?: boolean
    currentPath?: boolean
    altText?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }

  export type SiteImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalKey" | "currentPath" | "altText" | "uploadedAt" | "updatedAt", ExtArgs["result"]["siteImage"]>

  export type $SiteImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalKey: string
      currentPath: string
      altText: string
      uploadedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteImage"]>
    composites: {}
  }

  type SiteImageGetPayload<S extends boolean | null | undefined | SiteImageDefaultArgs> = $Result.GetResult<Prisma.$SiteImagePayload, S>

  type SiteImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteImageCountAggregateInputType | true
    }

  export interface SiteImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteImage'], meta: { name: 'SiteImage' } }
    /**
     * Find zero or one SiteImage that matches the filter.
     * @param {SiteImageFindUniqueArgs} args - Arguments to find a SiteImage
     * @example
     * // Get one SiteImage
     * const siteImage = await prisma.siteImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteImageFindUniqueArgs>(args: SelectSubset<T, SiteImageFindUniqueArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteImageFindUniqueOrThrowArgs} args - Arguments to find a SiteImage
     * @example
     * // Get one SiteImage
     * const siteImage = await prisma.siteImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageFindFirstArgs} args - Arguments to find a SiteImage
     * @example
     * // Get one SiteImage
     * const siteImage = await prisma.siteImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteImageFindFirstArgs>(args?: SelectSubset<T, SiteImageFindFirstArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageFindFirstOrThrowArgs} args - Arguments to find a SiteImage
     * @example
     * // Get one SiteImage
     * const siteImage = await prisma.siteImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteImages
     * const siteImages = await prisma.siteImage.findMany()
     * 
     * // Get first 10 SiteImages
     * const siteImages = await prisma.siteImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteImageWithIdOnly = await prisma.siteImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteImageFindManyArgs>(args?: SelectSubset<T, SiteImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteImage.
     * @param {SiteImageCreateArgs} args - Arguments to create a SiteImage.
     * @example
     * // Create one SiteImage
     * const SiteImage = await prisma.siteImage.create({
     *   data: {
     *     // ... data to create a SiteImage
     *   }
     * })
     * 
     */
    create<T extends SiteImageCreateArgs>(args: SelectSubset<T, SiteImageCreateArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteImages.
     * @param {SiteImageCreateManyArgs} args - Arguments to create many SiteImages.
     * @example
     * // Create many SiteImages
     * const siteImage = await prisma.siteImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteImageCreateManyArgs>(args?: SelectSubset<T, SiteImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteImages and returns the data saved in the database.
     * @param {SiteImageCreateManyAndReturnArgs} args - Arguments to create many SiteImages.
     * @example
     * // Create many SiteImages
     * const siteImage = await prisma.siteImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteImages and only return the `id`
     * const siteImageWithIdOnly = await prisma.siteImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteImage.
     * @param {SiteImageDeleteArgs} args - Arguments to delete one SiteImage.
     * @example
     * // Delete one SiteImage
     * const SiteImage = await prisma.siteImage.delete({
     *   where: {
     *     // ... filter to delete one SiteImage
     *   }
     * })
     * 
     */
    delete<T extends SiteImageDeleteArgs>(args: SelectSubset<T, SiteImageDeleteArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteImage.
     * @param {SiteImageUpdateArgs} args - Arguments to update one SiteImage.
     * @example
     * // Update one SiteImage
     * const siteImage = await prisma.siteImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteImageUpdateArgs>(args: SelectSubset<T, SiteImageUpdateArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteImages.
     * @param {SiteImageDeleteManyArgs} args - Arguments to filter SiteImages to delete.
     * @example
     * // Delete a few SiteImages
     * const { count } = await prisma.siteImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteImageDeleteManyArgs>(args?: SelectSubset<T, SiteImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteImages
     * const siteImage = await prisma.siteImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteImageUpdateManyArgs>(args: SelectSubset<T, SiteImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteImages and returns the data updated in the database.
     * @param {SiteImageUpdateManyAndReturnArgs} args - Arguments to update many SiteImages.
     * @example
     * // Update many SiteImages
     * const siteImage = await prisma.siteImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteImages and only return the `id`
     * const siteImageWithIdOnly = await prisma.siteImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteImage.
     * @param {SiteImageUpsertArgs} args - Arguments to update or create a SiteImage.
     * @example
     * // Update or create a SiteImage
     * const siteImage = await prisma.siteImage.upsert({
     *   create: {
     *     // ... data to create a SiteImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteImage we want to update
     *   }
     * })
     */
    upsert<T extends SiteImageUpsertArgs>(args: SelectSubset<T, SiteImageUpsertArgs<ExtArgs>>): Prisma__SiteImageClient<$Result.GetResult<Prisma.$SiteImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageCountArgs} args - Arguments to filter SiteImages to count.
     * @example
     * // Count the number of SiteImages
     * const count = await prisma.siteImage.count({
     *   where: {
     *     // ... the filter for the SiteImages we want to count
     *   }
     * })
    **/
    count<T extends SiteImageCountArgs>(
      args?: Subset<T, SiteImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteImageAggregateArgs>(args: Subset<T, SiteImageAggregateArgs>): Prisma.PrismaPromise<GetSiteImageAggregateType<T>>

    /**
     * Group by SiteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteImageGroupByArgs['orderBy'] }
        : { orderBy?: SiteImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteImage model
   */
  readonly fields: SiteImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteImage model
   */
  interface SiteImageFieldRefs {
    readonly id: FieldRef<"SiteImage", 'String'>
    readonly originalKey: FieldRef<"SiteImage", 'String'>
    readonly currentPath: FieldRef<"SiteImage", 'String'>
    readonly altText: FieldRef<"SiteImage", 'String'>
    readonly uploadedAt: FieldRef<"SiteImage", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteImage findUnique
   */
  export type SiteImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter, which SiteImage to fetch.
     */
    where: SiteImageWhereUniqueInput
  }

  /**
   * SiteImage findUniqueOrThrow
   */
  export type SiteImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter, which SiteImage to fetch.
     */
    where: SiteImageWhereUniqueInput
  }

  /**
   * SiteImage findFirst
   */
  export type SiteImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter, which SiteImage to fetch.
     */
    where?: SiteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteImages to fetch.
     */
    orderBy?: SiteImageOrderByWithRelationInput | SiteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteImages.
     */
    cursor?: SiteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteImages.
     */
    distinct?: SiteImageScalarFieldEnum | SiteImageScalarFieldEnum[]
  }

  /**
   * SiteImage findFirstOrThrow
   */
  export type SiteImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter, which SiteImage to fetch.
     */
    where?: SiteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteImages to fetch.
     */
    orderBy?: SiteImageOrderByWithRelationInput | SiteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteImages.
     */
    cursor?: SiteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteImages.
     */
    distinct?: SiteImageScalarFieldEnum | SiteImageScalarFieldEnum[]
  }

  /**
   * SiteImage findMany
   */
  export type SiteImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter, which SiteImages to fetch.
     */
    where?: SiteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteImages to fetch.
     */
    orderBy?: SiteImageOrderByWithRelationInput | SiteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteImages.
     */
    cursor?: SiteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteImages.
     */
    skip?: number
    distinct?: SiteImageScalarFieldEnum | SiteImageScalarFieldEnum[]
  }

  /**
   * SiteImage create
   */
  export type SiteImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteImage.
     */
    data: XOR<SiteImageCreateInput, SiteImageUncheckedCreateInput>
  }

  /**
   * SiteImage createMany
   */
  export type SiteImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteImages.
     */
    data: SiteImageCreateManyInput | SiteImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteImage createManyAndReturn
   */
  export type SiteImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * The data used to create many SiteImages.
     */
    data: SiteImageCreateManyInput | SiteImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteImage update
   */
  export type SiteImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteImage.
     */
    data: XOR<SiteImageUpdateInput, SiteImageUncheckedUpdateInput>
    /**
     * Choose, which SiteImage to update.
     */
    where: SiteImageWhereUniqueInput
  }

  /**
   * SiteImage updateMany
   */
  export type SiteImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteImages.
     */
    data: XOR<SiteImageUpdateManyMutationInput, SiteImageUncheckedUpdateManyInput>
    /**
     * Filter which SiteImages to update
     */
    where?: SiteImageWhereInput
    /**
     * Limit how many SiteImages to update.
     */
    limit?: number
  }

  /**
   * SiteImage updateManyAndReturn
   */
  export type SiteImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * The data used to update SiteImages.
     */
    data: XOR<SiteImageUpdateManyMutationInput, SiteImageUncheckedUpdateManyInput>
    /**
     * Filter which SiteImages to update
     */
    where?: SiteImageWhereInput
    /**
     * Limit how many SiteImages to update.
     */
    limit?: number
  }

  /**
   * SiteImage upsert
   */
  export type SiteImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteImage to update in case it exists.
     */
    where: SiteImageWhereUniqueInput
    /**
     * In case the SiteImage found by the `where` argument doesn't exist, create a new SiteImage with this data.
     */
    create: XOR<SiteImageCreateInput, SiteImageUncheckedCreateInput>
    /**
     * In case the SiteImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteImageUpdateInput, SiteImageUncheckedUpdateInput>
  }

  /**
   * SiteImage delete
   */
  export type SiteImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
    /**
     * Filter which SiteImage to delete.
     */
    where: SiteImageWhereUniqueInput
  }

  /**
   * SiteImage deleteMany
   */
  export type SiteImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteImages to delete
     */
    where?: SiteImageWhereInput
    /**
     * Limit how many SiteImages to delete.
     */
    limit?: number
  }

  /**
   * SiteImage without action
   */
  export type SiteImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteImage
     */
    select?: SiteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteImage
     */
    omit?: SiteImageOmit<ExtArgs> | null
  }


  /**
   * Model SiteColor
   */

  export type AggregateSiteColor = {
    _count: SiteColorCountAggregateOutputType | null
    _min: SiteColorMinAggregateOutputType | null
    _max: SiteColorMaxAggregateOutputType | null
  }

  export type SiteColorMinAggregateOutputType = {
    id: string | null
    page: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteColorMaxAggregateOutputType = {
    id: string | null
    page: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteColorCountAggregateOutputType = {
    id: number
    page: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteColorMinAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteColorMaxAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteColorCountAggregateInputType = {
    id?: true
    page?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteColor to aggregate.
     */
    where?: SiteColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteColors to fetch.
     */
    orderBy?: SiteColorOrderByWithRelationInput | SiteColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteColors
    **/
    _count?: true | SiteColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteColorMaxAggregateInputType
  }

  export type GetSiteColorAggregateType<T extends SiteColorAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteColor[P]>
      : GetScalarType<T[P], AggregateSiteColor[P]>
  }




  export type SiteColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteColorWhereInput
    orderBy?: SiteColorOrderByWithAggregationInput | SiteColorOrderByWithAggregationInput[]
    by: SiteColorScalarFieldEnum[] | SiteColorScalarFieldEnum
    having?: SiteColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteColorCountAggregateInputType | true
    _min?: SiteColorMinAggregateInputType
    _max?: SiteColorMaxAggregateInputType
  }

  export type SiteColorGroupByOutputType = {
    id: string
    page: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SiteColorCountAggregateOutputType | null
    _min: SiteColorMinAggregateOutputType | null
    _max: SiteColorMaxAggregateOutputType | null
  }

  type GetSiteColorGroupByPayload<T extends SiteColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteColorGroupByOutputType[P]>
            : GetScalarType<T[P], SiteColorGroupByOutputType[P]>
        }
      >
    >


  export type SiteColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteColor"]>

  export type SiteColorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteColor"]>

  export type SiteColorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteColor"]>

  export type SiteColorSelectScalar = {
    id?: boolean
    page?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "page" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["siteColor"]>

  export type $SiteColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteColor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      page: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteColor"]>
    composites: {}
  }

  type SiteColorGetPayload<S extends boolean | null | undefined | SiteColorDefaultArgs> = $Result.GetResult<Prisma.$SiteColorPayload, S>

  type SiteColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteColorCountAggregateInputType | true
    }

  export interface SiteColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteColor'], meta: { name: 'SiteColor' } }
    /**
     * Find zero or one SiteColor that matches the filter.
     * @param {SiteColorFindUniqueArgs} args - Arguments to find a SiteColor
     * @example
     * // Get one SiteColor
     * const siteColor = await prisma.siteColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteColorFindUniqueArgs>(args: SelectSubset<T, SiteColorFindUniqueArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteColor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteColorFindUniqueOrThrowArgs} args - Arguments to find a SiteColor
     * @example
     * // Get one SiteColor
     * const siteColor = await prisma.siteColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteColorFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorFindFirstArgs} args - Arguments to find a SiteColor
     * @example
     * // Get one SiteColor
     * const siteColor = await prisma.siteColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteColorFindFirstArgs>(args?: SelectSubset<T, SiteColorFindFirstArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteColor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorFindFirstOrThrowArgs} args - Arguments to find a SiteColor
     * @example
     * // Get one SiteColor
     * const siteColor = await prisma.siteColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteColorFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteColors
     * const siteColors = await prisma.siteColor.findMany()
     * 
     * // Get first 10 SiteColors
     * const siteColors = await prisma.siteColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteColorWithIdOnly = await prisma.siteColor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteColorFindManyArgs>(args?: SelectSubset<T, SiteColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteColor.
     * @param {SiteColorCreateArgs} args - Arguments to create a SiteColor.
     * @example
     * // Create one SiteColor
     * const SiteColor = await prisma.siteColor.create({
     *   data: {
     *     // ... data to create a SiteColor
     *   }
     * })
     * 
     */
    create<T extends SiteColorCreateArgs>(args: SelectSubset<T, SiteColorCreateArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteColors.
     * @param {SiteColorCreateManyArgs} args - Arguments to create many SiteColors.
     * @example
     * // Create many SiteColors
     * const siteColor = await prisma.siteColor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteColorCreateManyArgs>(args?: SelectSubset<T, SiteColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteColors and returns the data saved in the database.
     * @param {SiteColorCreateManyAndReturnArgs} args - Arguments to create many SiteColors.
     * @example
     * // Create many SiteColors
     * const siteColor = await prisma.siteColor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteColors and only return the `id`
     * const siteColorWithIdOnly = await prisma.siteColor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteColorCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteColorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteColor.
     * @param {SiteColorDeleteArgs} args - Arguments to delete one SiteColor.
     * @example
     * // Delete one SiteColor
     * const SiteColor = await prisma.siteColor.delete({
     *   where: {
     *     // ... filter to delete one SiteColor
     *   }
     * })
     * 
     */
    delete<T extends SiteColorDeleteArgs>(args: SelectSubset<T, SiteColorDeleteArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteColor.
     * @param {SiteColorUpdateArgs} args - Arguments to update one SiteColor.
     * @example
     * // Update one SiteColor
     * const siteColor = await prisma.siteColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteColorUpdateArgs>(args: SelectSubset<T, SiteColorUpdateArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteColors.
     * @param {SiteColorDeleteManyArgs} args - Arguments to filter SiteColors to delete.
     * @example
     * // Delete a few SiteColors
     * const { count } = await prisma.siteColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteColorDeleteManyArgs>(args?: SelectSubset<T, SiteColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteColors
     * const siteColor = await prisma.siteColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteColorUpdateManyArgs>(args: SelectSubset<T, SiteColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteColors and returns the data updated in the database.
     * @param {SiteColorUpdateManyAndReturnArgs} args - Arguments to update many SiteColors.
     * @example
     * // Update many SiteColors
     * const siteColor = await prisma.siteColor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteColors and only return the `id`
     * const siteColorWithIdOnly = await prisma.siteColor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteColorUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteColorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteColor.
     * @param {SiteColorUpsertArgs} args - Arguments to update or create a SiteColor.
     * @example
     * // Update or create a SiteColor
     * const siteColor = await prisma.siteColor.upsert({
     *   create: {
     *     // ... data to create a SiteColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteColor we want to update
     *   }
     * })
     */
    upsert<T extends SiteColorUpsertArgs>(args: SelectSubset<T, SiteColorUpsertArgs<ExtArgs>>): Prisma__SiteColorClient<$Result.GetResult<Prisma.$SiteColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorCountArgs} args - Arguments to filter SiteColors to count.
     * @example
     * // Count the number of SiteColors
     * const count = await prisma.siteColor.count({
     *   where: {
     *     // ... the filter for the SiteColors we want to count
     *   }
     * })
    **/
    count<T extends SiteColorCountArgs>(
      args?: Subset<T, SiteColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteColorAggregateArgs>(args: Subset<T, SiteColorAggregateArgs>): Prisma.PrismaPromise<GetSiteColorAggregateType<T>>

    /**
     * Group by SiteColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteColorGroupByArgs['orderBy'] }
        : { orderBy?: SiteColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteColor model
   */
  readonly fields: SiteColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteColor model
   */
  interface SiteColorFieldRefs {
    readonly id: FieldRef<"SiteColor", 'String'>
    readonly page: FieldRef<"SiteColor", 'String'>
    readonly key: FieldRef<"SiteColor", 'String'>
    readonly value: FieldRef<"SiteColor", 'String'>
    readonly createdAt: FieldRef<"SiteColor", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteColor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteColor findUnique
   */
  export type SiteColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter, which SiteColor to fetch.
     */
    where: SiteColorWhereUniqueInput
  }

  /**
   * SiteColor findUniqueOrThrow
   */
  export type SiteColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter, which SiteColor to fetch.
     */
    where: SiteColorWhereUniqueInput
  }

  /**
   * SiteColor findFirst
   */
  export type SiteColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter, which SiteColor to fetch.
     */
    where?: SiteColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteColors to fetch.
     */
    orderBy?: SiteColorOrderByWithRelationInput | SiteColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteColors.
     */
    cursor?: SiteColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteColors.
     */
    distinct?: SiteColorScalarFieldEnum | SiteColorScalarFieldEnum[]
  }

  /**
   * SiteColor findFirstOrThrow
   */
  export type SiteColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter, which SiteColor to fetch.
     */
    where?: SiteColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteColors to fetch.
     */
    orderBy?: SiteColorOrderByWithRelationInput | SiteColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteColors.
     */
    cursor?: SiteColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteColors.
     */
    distinct?: SiteColorScalarFieldEnum | SiteColorScalarFieldEnum[]
  }

  /**
   * SiteColor findMany
   */
  export type SiteColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter, which SiteColors to fetch.
     */
    where?: SiteColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteColors to fetch.
     */
    orderBy?: SiteColorOrderByWithRelationInput | SiteColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteColors.
     */
    cursor?: SiteColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteColors.
     */
    skip?: number
    distinct?: SiteColorScalarFieldEnum | SiteColorScalarFieldEnum[]
  }

  /**
   * SiteColor create
   */
  export type SiteColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteColor.
     */
    data: XOR<SiteColorCreateInput, SiteColorUncheckedCreateInput>
  }

  /**
   * SiteColor createMany
   */
  export type SiteColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteColors.
     */
    data: SiteColorCreateManyInput | SiteColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteColor createManyAndReturn
   */
  export type SiteColorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * The data used to create many SiteColors.
     */
    data: SiteColorCreateManyInput | SiteColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteColor update
   */
  export type SiteColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteColor.
     */
    data: XOR<SiteColorUpdateInput, SiteColorUncheckedUpdateInput>
    /**
     * Choose, which SiteColor to update.
     */
    where: SiteColorWhereUniqueInput
  }

  /**
   * SiteColor updateMany
   */
  export type SiteColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteColors.
     */
    data: XOR<SiteColorUpdateManyMutationInput, SiteColorUncheckedUpdateManyInput>
    /**
     * Filter which SiteColors to update
     */
    where?: SiteColorWhereInput
    /**
     * Limit how many SiteColors to update.
     */
    limit?: number
  }

  /**
   * SiteColor updateManyAndReturn
   */
  export type SiteColorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * The data used to update SiteColors.
     */
    data: XOR<SiteColorUpdateManyMutationInput, SiteColorUncheckedUpdateManyInput>
    /**
     * Filter which SiteColors to update
     */
    where?: SiteColorWhereInput
    /**
     * Limit how many SiteColors to update.
     */
    limit?: number
  }

  /**
   * SiteColor upsert
   */
  export type SiteColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteColor to update in case it exists.
     */
    where: SiteColorWhereUniqueInput
    /**
     * In case the SiteColor found by the `where` argument doesn't exist, create a new SiteColor with this data.
     */
    create: XOR<SiteColorCreateInput, SiteColorUncheckedCreateInput>
    /**
     * In case the SiteColor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteColorUpdateInput, SiteColorUncheckedUpdateInput>
  }

  /**
   * SiteColor delete
   */
  export type SiteColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
    /**
     * Filter which SiteColor to delete.
     */
    where: SiteColorWhereUniqueInput
  }

  /**
   * SiteColor deleteMany
   */
  export type SiteColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteColors to delete
     */
    where?: SiteColorWhereInput
    /**
     * Limit how many SiteColors to delete.
     */
    limit?: number
  }

  /**
   * SiteColor without action
   */
  export type SiteColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteColor
     */
    select?: SiteColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteColor
     */
    omit?: SiteColorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SiteMessageScalarFieldEnum: {
    id: 'id',
    page: 'page',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteMessageScalarFieldEnum = (typeof SiteMessageScalarFieldEnum)[keyof typeof SiteMessageScalarFieldEnum]


  export const SiteImageScalarFieldEnum: {
    id: 'id',
    originalKey: 'originalKey',
    currentPath: 'currentPath',
    altText: 'altText',
    uploadedAt: 'uploadedAt',
    updatedAt: 'updatedAt'
  };

  export type SiteImageScalarFieldEnum = (typeof SiteImageScalarFieldEnum)[keyof typeof SiteImageScalarFieldEnum]


  export const SiteColorScalarFieldEnum: {
    id: 'id',
    page: 'page',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteColorScalarFieldEnum = (typeof SiteColorScalarFieldEnum)[keyof typeof SiteColorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SiteMessageWhereInput = {
    AND?: SiteMessageWhereInput | SiteMessageWhereInput[]
    OR?: SiteMessageWhereInput[]
    NOT?: SiteMessageWhereInput | SiteMessageWhereInput[]
    id?: StringFilter<"SiteMessage"> | string
    page?: StringFilter<"SiteMessage"> | string
    key?: StringFilter<"SiteMessage"> | string
    value?: StringFilter<"SiteMessage"> | string
    createdAt?: DateTimeFilter<"SiteMessage"> | Date | string
    updatedAt?: DateTimeFilter<"SiteMessage"> | Date | string
  }

  export type SiteMessageOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    page_key?: SiteMessagePageKeyCompoundUniqueInput
    AND?: SiteMessageWhereInput | SiteMessageWhereInput[]
    OR?: SiteMessageWhereInput[]
    NOT?: SiteMessageWhereInput | SiteMessageWhereInput[]
    page?: StringFilter<"SiteMessage"> | string
    key?: StringFilter<"SiteMessage"> | string
    value?: StringFilter<"SiteMessage"> | string
    createdAt?: DateTimeFilter<"SiteMessage"> | Date | string
    updatedAt?: DateTimeFilter<"SiteMessage"> | Date | string
  }, "id" | "page_key">

  export type SiteMessageOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteMessageCountOrderByAggregateInput
    _max?: SiteMessageMaxOrderByAggregateInput
    _min?: SiteMessageMinOrderByAggregateInput
  }

  export type SiteMessageScalarWhereWithAggregatesInput = {
    AND?: SiteMessageScalarWhereWithAggregatesInput | SiteMessageScalarWhereWithAggregatesInput[]
    OR?: SiteMessageScalarWhereWithAggregatesInput[]
    NOT?: SiteMessageScalarWhereWithAggregatesInput | SiteMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteMessage"> | string
    page?: StringWithAggregatesFilter<"SiteMessage"> | string
    key?: StringWithAggregatesFilter<"SiteMessage"> | string
    value?: StringWithAggregatesFilter<"SiteMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteMessage"> | Date | string
  }

  export type SiteImageWhereInput = {
    AND?: SiteImageWhereInput | SiteImageWhereInput[]
    OR?: SiteImageWhereInput[]
    NOT?: SiteImageWhereInput | SiteImageWhereInput[]
    id?: StringFilter<"SiteImage"> | string
    originalKey?: StringFilter<"SiteImage"> | string
    currentPath?: StringFilter<"SiteImage"> | string
    altText?: StringFilter<"SiteImage"> | string
    uploadedAt?: DateTimeFilter<"SiteImage"> | Date | string
    updatedAt?: DateTimeFilter<"SiteImage"> | Date | string
  }

  export type SiteImageOrderByWithRelationInput = {
    id?: SortOrder
    originalKey?: SortOrder
    currentPath?: SortOrder
    altText?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    originalKey?: string
    AND?: SiteImageWhereInput | SiteImageWhereInput[]
    OR?: SiteImageWhereInput[]
    NOT?: SiteImageWhereInput | SiteImageWhereInput[]
    currentPath?: StringFilter<"SiteImage"> | string
    altText?: StringFilter<"SiteImage"> | string
    uploadedAt?: DateTimeFilter<"SiteImage"> | Date | string
    updatedAt?: DateTimeFilter<"SiteImage"> | Date | string
  }, "id" | "originalKey">

  export type SiteImageOrderByWithAggregationInput = {
    id?: SortOrder
    originalKey?: SortOrder
    currentPath?: SortOrder
    altText?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteImageCountOrderByAggregateInput
    _max?: SiteImageMaxOrderByAggregateInput
    _min?: SiteImageMinOrderByAggregateInput
  }

  export type SiteImageScalarWhereWithAggregatesInput = {
    AND?: SiteImageScalarWhereWithAggregatesInput | SiteImageScalarWhereWithAggregatesInput[]
    OR?: SiteImageScalarWhereWithAggregatesInput[]
    NOT?: SiteImageScalarWhereWithAggregatesInput | SiteImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteImage"> | string
    originalKey?: StringWithAggregatesFilter<"SiteImage"> | string
    currentPath?: StringWithAggregatesFilter<"SiteImage"> | string
    altText?: StringWithAggregatesFilter<"SiteImage"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"SiteImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteImage"> | Date | string
  }

  export type SiteColorWhereInput = {
    AND?: SiteColorWhereInput | SiteColorWhereInput[]
    OR?: SiteColorWhereInput[]
    NOT?: SiteColorWhereInput | SiteColorWhereInput[]
    id?: StringFilter<"SiteColor"> | string
    page?: StringFilter<"SiteColor"> | string
    key?: StringFilter<"SiteColor"> | string
    value?: StringFilter<"SiteColor"> | string
    createdAt?: DateTimeFilter<"SiteColor"> | Date | string
    updatedAt?: DateTimeFilter<"SiteColor"> | Date | string
  }

  export type SiteColorOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteColorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    page_key?: SiteColorPageKeyCompoundUniqueInput
    AND?: SiteColorWhereInput | SiteColorWhereInput[]
    OR?: SiteColorWhereInput[]
    NOT?: SiteColorWhereInput | SiteColorWhereInput[]
    page?: StringFilter<"SiteColor"> | string
    key?: StringFilter<"SiteColor"> | string
    value?: StringFilter<"SiteColor"> | string
    createdAt?: DateTimeFilter<"SiteColor"> | Date | string
    updatedAt?: DateTimeFilter<"SiteColor"> | Date | string
  }, "id" | "page_key">

  export type SiteColorOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteColorCountOrderByAggregateInput
    _max?: SiteColorMaxOrderByAggregateInput
    _min?: SiteColorMinOrderByAggregateInput
  }

  export type SiteColorScalarWhereWithAggregatesInput = {
    AND?: SiteColorScalarWhereWithAggregatesInput | SiteColorScalarWhereWithAggregatesInput[]
    OR?: SiteColorScalarWhereWithAggregatesInput[]
    NOT?: SiteColorScalarWhereWithAggregatesInput | SiteColorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteColor"> | string
    page?: StringWithAggregatesFilter<"SiteColor"> | string
    key?: StringWithAggregatesFilter<"SiteColor"> | string
    value?: StringWithAggregatesFilter<"SiteColor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteColor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteColor"> | Date | string
  }

  export type SiteMessageCreateInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMessageUncheckedCreateInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMessageCreateManyInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteImageCreateInput = {
    id?: string
    originalKey: string
    currentPath: string
    altText: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteImageUncheckedCreateInput = {
    id?: string
    originalKey: string
    currentPath: string
    altText: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalKey?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalKey?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteImageCreateManyInput = {
    id?: string
    originalKey: string
    currentPath: string
    altText: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalKey?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalKey?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteColorCreateInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteColorUncheckedCreateInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteColorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteColorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteColorCreateManyInput = {
    id?: string
    page: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteColorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteColorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteMessagePageKeyCompoundUniqueInput = {
    page: string
    key: string
  }

  export type SiteMessageCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMessageMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SiteImageCountOrderByAggregateInput = {
    id?: SortOrder
    originalKey?: SortOrder
    currentPath?: SortOrder
    altText?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteImageMaxOrderByAggregateInput = {
    id?: SortOrder
    originalKey?: SortOrder
    currentPath?: SortOrder
    altText?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteImageMinOrderByAggregateInput = {
    id?: SortOrder
    originalKey?: SortOrder
    currentPath?: SortOrder
    altText?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteColorPageKeyCompoundUniqueInput = {
    page: string
    key: string
  }

  export type SiteColorCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteColorMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteColorMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}