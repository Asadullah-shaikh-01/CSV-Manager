
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CsvFile
 * 
 */
export type CsvFile = $Result.DefaultSelection<Prisma.$CsvFilePayload>
/**
 * Model CsvRow
 * 
 */
export type CsvRow = $Result.DefaultSelection<Prisma.$CsvRowPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.csvFile`: Exposes CRUD operations for the **CsvFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CsvFiles
    * const csvFiles = await prisma.csvFile.findMany()
    * ```
    */
  get csvFile(): Prisma.CsvFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.csvRow`: Exposes CRUD operations for the **CsvRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CsvRows
    * const csvRows = await prisma.csvRow.findMany()
    * ```
    */
  get csvRow(): Prisma.CsvRowDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    CsvFile: 'CsvFile',
    CsvRow: 'CsvRow'
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
      modelProps: "user" | "csvFile" | "csvRow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CsvFile: {
        payload: Prisma.$CsvFilePayload<ExtArgs>
        fields: Prisma.CsvFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CsvFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CsvFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          findFirst: {
            args: Prisma.CsvFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CsvFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          findMany: {
            args: Prisma.CsvFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>[]
          }
          create: {
            args: Prisma.CsvFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          createMany: {
            args: Prisma.CsvFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CsvFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>[]
          }
          delete: {
            args: Prisma.CsvFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          update: {
            args: Prisma.CsvFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          deleteMany: {
            args: Prisma.CsvFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CsvFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CsvFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>[]
          }
          upsert: {
            args: Prisma.CsvFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvFilePayload>
          }
          aggregate: {
            args: Prisma.CsvFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCsvFile>
          }
          groupBy: {
            args: Prisma.CsvFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CsvFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CsvFileCountArgs<ExtArgs>
            result: $Utils.Optional<CsvFileCountAggregateOutputType> | number
          }
        }
      }
      CsvRow: {
        payload: Prisma.$CsvRowPayload<ExtArgs>
        fields: Prisma.CsvRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CsvRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CsvRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          findFirst: {
            args: Prisma.CsvRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CsvRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          findMany: {
            args: Prisma.CsvRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>[]
          }
          create: {
            args: Prisma.CsvRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          createMany: {
            args: Prisma.CsvRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CsvRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>[]
          }
          delete: {
            args: Prisma.CsvRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          update: {
            args: Prisma.CsvRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          deleteMany: {
            args: Prisma.CsvRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CsvRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CsvRowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>[]
          }
          upsert: {
            args: Prisma.CsvRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CsvRowPayload>
          }
          aggregate: {
            args: Prisma.CsvRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCsvRow>
          }
          groupBy: {
            args: Prisma.CsvRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CsvRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CsvRowCountArgs<ExtArgs>
            result: $Utils.Optional<CsvRowCountAggregateOutputType> | number
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
    user?: UserOmit
    csvFile?: CsvFileOmit
    csvRow?: CsvRowOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    csvFiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvFiles?: boolean | UserCountOutputTypeCountCsvFilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCsvFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CsvFileWhereInput
  }


  /**
   * Count Type CsvFileCountOutputType
   */

  export type CsvFileCountOutputType = {
    rows: number
  }

  export type CsvFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | CsvFileCountOutputTypeCountRowsArgs
  }

  // Custom InputTypes
  /**
   * CsvFileCountOutputType without action
   */
  export type CsvFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFileCountOutputType
     */
    select?: CsvFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CsvFileCountOutputType without action
   */
  export type CsvFileCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CsvRowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    csvFiles?: boolean | User$csvFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvFiles?: boolean | User$csvFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      csvFiles: Prisma.$CsvFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    csvFiles<T extends User$csvFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$csvFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.csvFiles
   */
  export type User$csvFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    where?: CsvFileWhereInput
    orderBy?: CsvFileOrderByWithRelationInput | CsvFileOrderByWithRelationInput[]
    cursor?: CsvFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CsvFileScalarFieldEnum | CsvFileScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CsvFile
   */

  export type AggregateCsvFile = {
    _count: CsvFileCountAggregateOutputType | null
    _avg: CsvFileAvgAggregateOutputType | null
    _sum: CsvFileSumAggregateOutputType | null
    _min: CsvFileMinAggregateOutputType | null
    _max: CsvFileMaxAggregateOutputType | null
  }

  export type CsvFileAvgAggregateOutputType = {
    rowCount: number | null
  }

  export type CsvFileSumAggregateOutputType = {
    rowCount: number | null
  }

  export type CsvFileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    originalName: string | null
    uploadedAt: Date | null
    rowCount: number | null
  }

  export type CsvFileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    originalName: string | null
    uploadedAt: Date | null
    rowCount: number | null
  }

  export type CsvFileCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    originalName: number
    uploadedAt: number
    columnHeaders: number
    rowCount: number
    _all: number
  }


  export type CsvFileAvgAggregateInputType = {
    rowCount?: true
  }

  export type CsvFileSumAggregateInputType = {
    rowCount?: true
  }

  export type CsvFileMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    uploadedAt?: true
    rowCount?: true
  }

  export type CsvFileMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    uploadedAt?: true
    rowCount?: true
  }

  export type CsvFileCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    originalName?: true
    uploadedAt?: true
    columnHeaders?: true
    rowCount?: true
    _all?: true
  }

  export type CsvFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CsvFile to aggregate.
     */
    where?: CsvFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvFiles to fetch.
     */
    orderBy?: CsvFileOrderByWithRelationInput | CsvFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CsvFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CsvFiles
    **/
    _count?: true | CsvFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsvFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsvFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsvFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsvFileMaxAggregateInputType
  }

  export type GetCsvFileAggregateType<T extends CsvFileAggregateArgs> = {
        [P in keyof T & keyof AggregateCsvFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCsvFile[P]>
      : GetScalarType<T[P], AggregateCsvFile[P]>
  }




  export type CsvFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CsvFileWhereInput
    orderBy?: CsvFileOrderByWithAggregationInput | CsvFileOrderByWithAggregationInput[]
    by: CsvFileScalarFieldEnum[] | CsvFileScalarFieldEnum
    having?: CsvFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsvFileCountAggregateInputType | true
    _avg?: CsvFileAvgAggregateInputType
    _sum?: CsvFileSumAggregateInputType
    _min?: CsvFileMinAggregateInputType
    _max?: CsvFileMaxAggregateInputType
  }

  export type CsvFileGroupByOutputType = {
    id: string
    userId: string
    fileName: string
    originalName: string
    uploadedAt: Date
    columnHeaders: string[]
    rowCount: number
    _count: CsvFileCountAggregateOutputType | null
    _avg: CsvFileAvgAggregateOutputType | null
    _sum: CsvFileSumAggregateOutputType | null
    _min: CsvFileMinAggregateOutputType | null
    _max: CsvFileMaxAggregateOutputType | null
  }

  type GetCsvFileGroupByPayload<T extends CsvFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CsvFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsvFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsvFileGroupByOutputType[P]>
            : GetScalarType<T[P], CsvFileGroupByOutputType[P]>
        }
      >
    >


  export type CsvFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    uploadedAt?: boolean
    columnHeaders?: boolean
    rowCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rows?: boolean | CsvFile$rowsArgs<ExtArgs>
    _count?: boolean | CsvFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvFile"]>

  export type CsvFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    uploadedAt?: boolean
    columnHeaders?: boolean
    rowCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvFile"]>

  export type CsvFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    uploadedAt?: boolean
    columnHeaders?: boolean
    rowCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvFile"]>

  export type CsvFileSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    originalName?: boolean
    uploadedAt?: boolean
    columnHeaders?: boolean
    rowCount?: boolean
  }

  export type CsvFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fileName" | "originalName" | "uploadedAt" | "columnHeaders" | "rowCount", ExtArgs["result"]["csvFile"]>
  export type CsvFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rows?: boolean | CsvFile$rowsArgs<ExtArgs>
    _count?: boolean | CsvFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CsvFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CsvFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CsvFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CsvFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rows: Prisma.$CsvRowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fileName: string
      originalName: string
      uploadedAt: Date
      columnHeaders: string[]
      rowCount: number
    }, ExtArgs["result"]["csvFile"]>
    composites: {}
  }

  type CsvFileGetPayload<S extends boolean | null | undefined | CsvFileDefaultArgs> = $Result.GetResult<Prisma.$CsvFilePayload, S>

  type CsvFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CsvFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CsvFileCountAggregateInputType | true
    }

  export interface CsvFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CsvFile'], meta: { name: 'CsvFile' } }
    /**
     * Find zero or one CsvFile that matches the filter.
     * @param {CsvFileFindUniqueArgs} args - Arguments to find a CsvFile
     * @example
     * // Get one CsvFile
     * const csvFile = await prisma.csvFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CsvFileFindUniqueArgs>(args: SelectSubset<T, CsvFileFindUniqueArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CsvFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CsvFileFindUniqueOrThrowArgs} args - Arguments to find a CsvFile
     * @example
     * // Get one CsvFile
     * const csvFile = await prisma.csvFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CsvFileFindUniqueOrThrowArgs>(args: SelectSubset<T, CsvFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileFindFirstArgs} args - Arguments to find a CsvFile
     * @example
     * // Get one CsvFile
     * const csvFile = await prisma.csvFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CsvFileFindFirstArgs>(args?: SelectSubset<T, CsvFileFindFirstArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileFindFirstOrThrowArgs} args - Arguments to find a CsvFile
     * @example
     * // Get one CsvFile
     * const csvFile = await prisma.csvFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CsvFileFindFirstOrThrowArgs>(args?: SelectSubset<T, CsvFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CsvFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CsvFiles
     * const csvFiles = await prisma.csvFile.findMany()
     * 
     * // Get first 10 CsvFiles
     * const csvFiles = await prisma.csvFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const csvFileWithIdOnly = await prisma.csvFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CsvFileFindManyArgs>(args?: SelectSubset<T, CsvFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CsvFile.
     * @param {CsvFileCreateArgs} args - Arguments to create a CsvFile.
     * @example
     * // Create one CsvFile
     * const CsvFile = await prisma.csvFile.create({
     *   data: {
     *     // ... data to create a CsvFile
     *   }
     * })
     * 
     */
    create<T extends CsvFileCreateArgs>(args: SelectSubset<T, CsvFileCreateArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CsvFiles.
     * @param {CsvFileCreateManyArgs} args - Arguments to create many CsvFiles.
     * @example
     * // Create many CsvFiles
     * const csvFile = await prisma.csvFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CsvFileCreateManyArgs>(args?: SelectSubset<T, CsvFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CsvFiles and returns the data saved in the database.
     * @param {CsvFileCreateManyAndReturnArgs} args - Arguments to create many CsvFiles.
     * @example
     * // Create many CsvFiles
     * const csvFile = await prisma.csvFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CsvFiles and only return the `id`
     * const csvFileWithIdOnly = await prisma.csvFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CsvFileCreateManyAndReturnArgs>(args?: SelectSubset<T, CsvFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CsvFile.
     * @param {CsvFileDeleteArgs} args - Arguments to delete one CsvFile.
     * @example
     * // Delete one CsvFile
     * const CsvFile = await prisma.csvFile.delete({
     *   where: {
     *     // ... filter to delete one CsvFile
     *   }
     * })
     * 
     */
    delete<T extends CsvFileDeleteArgs>(args: SelectSubset<T, CsvFileDeleteArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CsvFile.
     * @param {CsvFileUpdateArgs} args - Arguments to update one CsvFile.
     * @example
     * // Update one CsvFile
     * const csvFile = await prisma.csvFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CsvFileUpdateArgs>(args: SelectSubset<T, CsvFileUpdateArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CsvFiles.
     * @param {CsvFileDeleteManyArgs} args - Arguments to filter CsvFiles to delete.
     * @example
     * // Delete a few CsvFiles
     * const { count } = await prisma.csvFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CsvFileDeleteManyArgs>(args?: SelectSubset<T, CsvFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CsvFiles
     * const csvFile = await prisma.csvFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CsvFileUpdateManyArgs>(args: SelectSubset<T, CsvFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvFiles and returns the data updated in the database.
     * @param {CsvFileUpdateManyAndReturnArgs} args - Arguments to update many CsvFiles.
     * @example
     * // Update many CsvFiles
     * const csvFile = await prisma.csvFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CsvFiles and only return the `id`
     * const csvFileWithIdOnly = await prisma.csvFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CsvFileUpdateManyAndReturnArgs>(args: SelectSubset<T, CsvFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CsvFile.
     * @param {CsvFileUpsertArgs} args - Arguments to update or create a CsvFile.
     * @example
     * // Update or create a CsvFile
     * const csvFile = await prisma.csvFile.upsert({
     *   create: {
     *     // ... data to create a CsvFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CsvFile we want to update
     *   }
     * })
     */
    upsert<T extends CsvFileUpsertArgs>(args: SelectSubset<T, CsvFileUpsertArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CsvFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileCountArgs} args - Arguments to filter CsvFiles to count.
     * @example
     * // Count the number of CsvFiles
     * const count = await prisma.csvFile.count({
     *   where: {
     *     // ... the filter for the CsvFiles we want to count
     *   }
     * })
    **/
    count<T extends CsvFileCountArgs>(
      args?: Subset<T, CsvFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsvFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CsvFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsvFileAggregateArgs>(args: Subset<T, CsvFileAggregateArgs>): Prisma.PrismaPromise<GetCsvFileAggregateType<T>>

    /**
     * Group by CsvFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvFileGroupByArgs} args - Group by arguments.
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
      T extends CsvFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CsvFileGroupByArgs['orderBy'] }
        : { orderBy?: CsvFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CsvFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsvFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CsvFile model
   */
  readonly fields: CsvFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CsvFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CsvFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rows<T extends CsvFile$rowsArgs<ExtArgs> = {}>(args?: Subset<T, CsvFile$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CsvFile model
   */
  interface CsvFileFieldRefs {
    readonly id: FieldRef<"CsvFile", 'String'>
    readonly userId: FieldRef<"CsvFile", 'String'>
    readonly fileName: FieldRef<"CsvFile", 'String'>
    readonly originalName: FieldRef<"CsvFile", 'String'>
    readonly uploadedAt: FieldRef<"CsvFile", 'DateTime'>
    readonly columnHeaders: FieldRef<"CsvFile", 'String[]'>
    readonly rowCount: FieldRef<"CsvFile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CsvFile findUnique
   */
  export type CsvFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter, which CsvFile to fetch.
     */
    where: CsvFileWhereUniqueInput
  }

  /**
   * CsvFile findUniqueOrThrow
   */
  export type CsvFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter, which CsvFile to fetch.
     */
    where: CsvFileWhereUniqueInput
  }

  /**
   * CsvFile findFirst
   */
  export type CsvFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter, which CsvFile to fetch.
     */
    where?: CsvFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvFiles to fetch.
     */
    orderBy?: CsvFileOrderByWithRelationInput | CsvFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CsvFiles.
     */
    cursor?: CsvFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CsvFiles.
     */
    distinct?: CsvFileScalarFieldEnum | CsvFileScalarFieldEnum[]
  }

  /**
   * CsvFile findFirstOrThrow
   */
  export type CsvFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter, which CsvFile to fetch.
     */
    where?: CsvFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvFiles to fetch.
     */
    orderBy?: CsvFileOrderByWithRelationInput | CsvFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CsvFiles.
     */
    cursor?: CsvFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CsvFiles.
     */
    distinct?: CsvFileScalarFieldEnum | CsvFileScalarFieldEnum[]
  }

  /**
   * CsvFile findMany
   */
  export type CsvFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter, which CsvFiles to fetch.
     */
    where?: CsvFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvFiles to fetch.
     */
    orderBy?: CsvFileOrderByWithRelationInput | CsvFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CsvFiles.
     */
    cursor?: CsvFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvFiles.
     */
    skip?: number
    distinct?: CsvFileScalarFieldEnum | CsvFileScalarFieldEnum[]
  }

  /**
   * CsvFile create
   */
  export type CsvFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * The data needed to create a CsvFile.
     */
    data: XOR<CsvFileCreateInput, CsvFileUncheckedCreateInput>
  }

  /**
   * CsvFile createMany
   */
  export type CsvFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CsvFiles.
     */
    data: CsvFileCreateManyInput | CsvFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CsvFile createManyAndReturn
   */
  export type CsvFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * The data used to create many CsvFiles.
     */
    data: CsvFileCreateManyInput | CsvFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CsvFile update
   */
  export type CsvFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * The data needed to update a CsvFile.
     */
    data: XOR<CsvFileUpdateInput, CsvFileUncheckedUpdateInput>
    /**
     * Choose, which CsvFile to update.
     */
    where: CsvFileWhereUniqueInput
  }

  /**
   * CsvFile updateMany
   */
  export type CsvFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CsvFiles.
     */
    data: XOR<CsvFileUpdateManyMutationInput, CsvFileUncheckedUpdateManyInput>
    /**
     * Filter which CsvFiles to update
     */
    where?: CsvFileWhereInput
    /**
     * Limit how many CsvFiles to update.
     */
    limit?: number
  }

  /**
   * CsvFile updateManyAndReturn
   */
  export type CsvFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * The data used to update CsvFiles.
     */
    data: XOR<CsvFileUpdateManyMutationInput, CsvFileUncheckedUpdateManyInput>
    /**
     * Filter which CsvFiles to update
     */
    where?: CsvFileWhereInput
    /**
     * Limit how many CsvFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CsvFile upsert
   */
  export type CsvFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * The filter to search for the CsvFile to update in case it exists.
     */
    where: CsvFileWhereUniqueInput
    /**
     * In case the CsvFile found by the `where` argument doesn't exist, create a new CsvFile with this data.
     */
    create: XOR<CsvFileCreateInput, CsvFileUncheckedCreateInput>
    /**
     * In case the CsvFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CsvFileUpdateInput, CsvFileUncheckedUpdateInput>
  }

  /**
   * CsvFile delete
   */
  export type CsvFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
    /**
     * Filter which CsvFile to delete.
     */
    where: CsvFileWhereUniqueInput
  }

  /**
   * CsvFile deleteMany
   */
  export type CsvFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CsvFiles to delete
     */
    where?: CsvFileWhereInput
    /**
     * Limit how many CsvFiles to delete.
     */
    limit?: number
  }

  /**
   * CsvFile.rows
   */
  export type CsvFile$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    where?: CsvRowWhereInput
    orderBy?: CsvRowOrderByWithRelationInput | CsvRowOrderByWithRelationInput[]
    cursor?: CsvRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CsvRowScalarFieldEnum | CsvRowScalarFieldEnum[]
  }

  /**
   * CsvFile without action
   */
  export type CsvFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvFile
     */
    select?: CsvFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvFile
     */
    omit?: CsvFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvFileInclude<ExtArgs> | null
  }


  /**
   * Model CsvRow
   */

  export type AggregateCsvRow = {
    _count: CsvRowCountAggregateOutputType | null
    _avg: CsvRowAvgAggregateOutputType | null
    _sum: CsvRowSumAggregateOutputType | null
    _min: CsvRowMinAggregateOutputType | null
    _max: CsvRowMaxAggregateOutputType | null
  }

  export type CsvRowAvgAggregateOutputType = {
    rowIndex: number | null
  }

  export type CsvRowSumAggregateOutputType = {
    rowIndex: number | null
  }

  export type CsvRowMinAggregateOutputType = {
    id: string | null
    csvFileId: string | null
    rowIndex: number | null
  }

  export type CsvRowMaxAggregateOutputType = {
    id: string | null
    csvFileId: string | null
    rowIndex: number | null
  }

  export type CsvRowCountAggregateOutputType = {
    id: number
    csvFileId: number
    rowData: number
    rowIndex: number
    _all: number
  }


  export type CsvRowAvgAggregateInputType = {
    rowIndex?: true
  }

  export type CsvRowSumAggregateInputType = {
    rowIndex?: true
  }

  export type CsvRowMinAggregateInputType = {
    id?: true
    csvFileId?: true
    rowIndex?: true
  }

  export type CsvRowMaxAggregateInputType = {
    id?: true
    csvFileId?: true
    rowIndex?: true
  }

  export type CsvRowCountAggregateInputType = {
    id?: true
    csvFileId?: true
    rowData?: true
    rowIndex?: true
    _all?: true
  }

  export type CsvRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CsvRow to aggregate.
     */
    where?: CsvRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvRows to fetch.
     */
    orderBy?: CsvRowOrderByWithRelationInput | CsvRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CsvRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CsvRows
    **/
    _count?: true | CsvRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsvRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsvRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsvRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsvRowMaxAggregateInputType
  }

  export type GetCsvRowAggregateType<T extends CsvRowAggregateArgs> = {
        [P in keyof T & keyof AggregateCsvRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCsvRow[P]>
      : GetScalarType<T[P], AggregateCsvRow[P]>
  }




  export type CsvRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CsvRowWhereInput
    orderBy?: CsvRowOrderByWithAggregationInput | CsvRowOrderByWithAggregationInput[]
    by: CsvRowScalarFieldEnum[] | CsvRowScalarFieldEnum
    having?: CsvRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsvRowCountAggregateInputType | true
    _avg?: CsvRowAvgAggregateInputType
    _sum?: CsvRowSumAggregateInputType
    _min?: CsvRowMinAggregateInputType
    _max?: CsvRowMaxAggregateInputType
  }

  export type CsvRowGroupByOutputType = {
    id: string
    csvFileId: string
    rowData: JsonValue
    rowIndex: number
    _count: CsvRowCountAggregateOutputType | null
    _avg: CsvRowAvgAggregateOutputType | null
    _sum: CsvRowSumAggregateOutputType | null
    _min: CsvRowMinAggregateOutputType | null
    _max: CsvRowMaxAggregateOutputType | null
  }

  type GetCsvRowGroupByPayload<T extends CsvRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CsvRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsvRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsvRowGroupByOutputType[P]>
            : GetScalarType<T[P], CsvRowGroupByOutputType[P]>
        }
      >
    >


  export type CsvRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    csvFileId?: boolean
    rowData?: boolean
    rowIndex?: boolean
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvRow"]>

  export type CsvRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    csvFileId?: boolean
    rowData?: boolean
    rowIndex?: boolean
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvRow"]>

  export type CsvRowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    csvFileId?: boolean
    rowData?: boolean
    rowIndex?: boolean
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvRow"]>

  export type CsvRowSelectScalar = {
    id?: boolean
    csvFileId?: boolean
    rowData?: boolean
    rowIndex?: boolean
  }

  export type CsvRowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "csvFileId" | "rowData" | "rowIndex", ExtArgs["result"]["csvRow"]>
  export type CsvRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }
  export type CsvRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }
  export type CsvRowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvFile?: boolean | CsvFileDefaultArgs<ExtArgs>
  }

  export type $CsvRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CsvRow"
    objects: {
      csvFile: Prisma.$CsvFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      csvFileId: string
      rowData: Prisma.JsonValue
      rowIndex: number
    }, ExtArgs["result"]["csvRow"]>
    composites: {}
  }

  type CsvRowGetPayload<S extends boolean | null | undefined | CsvRowDefaultArgs> = $Result.GetResult<Prisma.$CsvRowPayload, S>

  type CsvRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CsvRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CsvRowCountAggregateInputType | true
    }

  export interface CsvRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CsvRow'], meta: { name: 'CsvRow' } }
    /**
     * Find zero or one CsvRow that matches the filter.
     * @param {CsvRowFindUniqueArgs} args - Arguments to find a CsvRow
     * @example
     * // Get one CsvRow
     * const csvRow = await prisma.csvRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CsvRowFindUniqueArgs>(args: SelectSubset<T, CsvRowFindUniqueArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CsvRow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CsvRowFindUniqueOrThrowArgs} args - Arguments to find a CsvRow
     * @example
     * // Get one CsvRow
     * const csvRow = await prisma.csvRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CsvRowFindUniqueOrThrowArgs>(args: SelectSubset<T, CsvRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowFindFirstArgs} args - Arguments to find a CsvRow
     * @example
     * // Get one CsvRow
     * const csvRow = await prisma.csvRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CsvRowFindFirstArgs>(args?: SelectSubset<T, CsvRowFindFirstArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowFindFirstOrThrowArgs} args - Arguments to find a CsvRow
     * @example
     * // Get one CsvRow
     * const csvRow = await prisma.csvRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CsvRowFindFirstOrThrowArgs>(args?: SelectSubset<T, CsvRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CsvRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CsvRows
     * const csvRows = await prisma.csvRow.findMany()
     * 
     * // Get first 10 CsvRows
     * const csvRows = await prisma.csvRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const csvRowWithIdOnly = await prisma.csvRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CsvRowFindManyArgs>(args?: SelectSubset<T, CsvRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CsvRow.
     * @param {CsvRowCreateArgs} args - Arguments to create a CsvRow.
     * @example
     * // Create one CsvRow
     * const CsvRow = await prisma.csvRow.create({
     *   data: {
     *     // ... data to create a CsvRow
     *   }
     * })
     * 
     */
    create<T extends CsvRowCreateArgs>(args: SelectSubset<T, CsvRowCreateArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CsvRows.
     * @param {CsvRowCreateManyArgs} args - Arguments to create many CsvRows.
     * @example
     * // Create many CsvRows
     * const csvRow = await prisma.csvRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CsvRowCreateManyArgs>(args?: SelectSubset<T, CsvRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CsvRows and returns the data saved in the database.
     * @param {CsvRowCreateManyAndReturnArgs} args - Arguments to create many CsvRows.
     * @example
     * // Create many CsvRows
     * const csvRow = await prisma.csvRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CsvRows and only return the `id`
     * const csvRowWithIdOnly = await prisma.csvRow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CsvRowCreateManyAndReturnArgs>(args?: SelectSubset<T, CsvRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CsvRow.
     * @param {CsvRowDeleteArgs} args - Arguments to delete one CsvRow.
     * @example
     * // Delete one CsvRow
     * const CsvRow = await prisma.csvRow.delete({
     *   where: {
     *     // ... filter to delete one CsvRow
     *   }
     * })
     * 
     */
    delete<T extends CsvRowDeleteArgs>(args: SelectSubset<T, CsvRowDeleteArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CsvRow.
     * @param {CsvRowUpdateArgs} args - Arguments to update one CsvRow.
     * @example
     * // Update one CsvRow
     * const csvRow = await prisma.csvRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CsvRowUpdateArgs>(args: SelectSubset<T, CsvRowUpdateArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CsvRows.
     * @param {CsvRowDeleteManyArgs} args - Arguments to filter CsvRows to delete.
     * @example
     * // Delete a few CsvRows
     * const { count } = await prisma.csvRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CsvRowDeleteManyArgs>(args?: SelectSubset<T, CsvRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CsvRows
     * const csvRow = await prisma.csvRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CsvRowUpdateManyArgs>(args: SelectSubset<T, CsvRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvRows and returns the data updated in the database.
     * @param {CsvRowUpdateManyAndReturnArgs} args - Arguments to update many CsvRows.
     * @example
     * // Update many CsvRows
     * const csvRow = await prisma.csvRow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CsvRows and only return the `id`
     * const csvRowWithIdOnly = await prisma.csvRow.updateManyAndReturn({
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
    updateManyAndReturn<T extends CsvRowUpdateManyAndReturnArgs>(args: SelectSubset<T, CsvRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CsvRow.
     * @param {CsvRowUpsertArgs} args - Arguments to update or create a CsvRow.
     * @example
     * // Update or create a CsvRow
     * const csvRow = await prisma.csvRow.upsert({
     *   create: {
     *     // ... data to create a CsvRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CsvRow we want to update
     *   }
     * })
     */
    upsert<T extends CsvRowUpsertArgs>(args: SelectSubset<T, CsvRowUpsertArgs<ExtArgs>>): Prisma__CsvRowClient<$Result.GetResult<Prisma.$CsvRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CsvRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowCountArgs} args - Arguments to filter CsvRows to count.
     * @example
     * // Count the number of CsvRows
     * const count = await prisma.csvRow.count({
     *   where: {
     *     // ... the filter for the CsvRows we want to count
     *   }
     * })
    **/
    count<T extends CsvRowCountArgs>(
      args?: Subset<T, CsvRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsvRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CsvRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsvRowAggregateArgs>(args: Subset<T, CsvRowAggregateArgs>): Prisma.PrismaPromise<GetCsvRowAggregateType<T>>

    /**
     * Group by CsvRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvRowGroupByArgs} args - Group by arguments.
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
      T extends CsvRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CsvRowGroupByArgs['orderBy'] }
        : { orderBy?: CsvRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CsvRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsvRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CsvRow model
   */
  readonly fields: CsvRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CsvRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CsvRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    csvFile<T extends CsvFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CsvFileDefaultArgs<ExtArgs>>): Prisma__CsvFileClient<$Result.GetResult<Prisma.$CsvFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CsvRow model
   */
  interface CsvRowFieldRefs {
    readonly id: FieldRef<"CsvRow", 'String'>
    readonly csvFileId: FieldRef<"CsvRow", 'String'>
    readonly rowData: FieldRef<"CsvRow", 'Json'>
    readonly rowIndex: FieldRef<"CsvRow", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CsvRow findUnique
   */
  export type CsvRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter, which CsvRow to fetch.
     */
    where: CsvRowWhereUniqueInput
  }

  /**
   * CsvRow findUniqueOrThrow
   */
  export type CsvRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter, which CsvRow to fetch.
     */
    where: CsvRowWhereUniqueInput
  }

  /**
   * CsvRow findFirst
   */
  export type CsvRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter, which CsvRow to fetch.
     */
    where?: CsvRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvRows to fetch.
     */
    orderBy?: CsvRowOrderByWithRelationInput | CsvRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CsvRows.
     */
    cursor?: CsvRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CsvRows.
     */
    distinct?: CsvRowScalarFieldEnum | CsvRowScalarFieldEnum[]
  }

  /**
   * CsvRow findFirstOrThrow
   */
  export type CsvRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter, which CsvRow to fetch.
     */
    where?: CsvRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvRows to fetch.
     */
    orderBy?: CsvRowOrderByWithRelationInput | CsvRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CsvRows.
     */
    cursor?: CsvRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CsvRows.
     */
    distinct?: CsvRowScalarFieldEnum | CsvRowScalarFieldEnum[]
  }

  /**
   * CsvRow findMany
   */
  export type CsvRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter, which CsvRows to fetch.
     */
    where?: CsvRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CsvRows to fetch.
     */
    orderBy?: CsvRowOrderByWithRelationInput | CsvRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CsvRows.
     */
    cursor?: CsvRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CsvRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CsvRows.
     */
    skip?: number
    distinct?: CsvRowScalarFieldEnum | CsvRowScalarFieldEnum[]
  }

  /**
   * CsvRow create
   */
  export type CsvRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * The data needed to create a CsvRow.
     */
    data: XOR<CsvRowCreateInput, CsvRowUncheckedCreateInput>
  }

  /**
   * CsvRow createMany
   */
  export type CsvRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CsvRows.
     */
    data: CsvRowCreateManyInput | CsvRowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CsvRow createManyAndReturn
   */
  export type CsvRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * The data used to create many CsvRows.
     */
    data: CsvRowCreateManyInput | CsvRowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CsvRow update
   */
  export type CsvRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * The data needed to update a CsvRow.
     */
    data: XOR<CsvRowUpdateInput, CsvRowUncheckedUpdateInput>
    /**
     * Choose, which CsvRow to update.
     */
    where: CsvRowWhereUniqueInput
  }

  /**
   * CsvRow updateMany
   */
  export type CsvRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CsvRows.
     */
    data: XOR<CsvRowUpdateManyMutationInput, CsvRowUncheckedUpdateManyInput>
    /**
     * Filter which CsvRows to update
     */
    where?: CsvRowWhereInput
    /**
     * Limit how many CsvRows to update.
     */
    limit?: number
  }

  /**
   * CsvRow updateManyAndReturn
   */
  export type CsvRowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * The data used to update CsvRows.
     */
    data: XOR<CsvRowUpdateManyMutationInput, CsvRowUncheckedUpdateManyInput>
    /**
     * Filter which CsvRows to update
     */
    where?: CsvRowWhereInput
    /**
     * Limit how many CsvRows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CsvRow upsert
   */
  export type CsvRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * The filter to search for the CsvRow to update in case it exists.
     */
    where: CsvRowWhereUniqueInput
    /**
     * In case the CsvRow found by the `where` argument doesn't exist, create a new CsvRow with this data.
     */
    create: XOR<CsvRowCreateInput, CsvRowUncheckedCreateInput>
    /**
     * In case the CsvRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CsvRowUpdateInput, CsvRowUncheckedUpdateInput>
  }

  /**
   * CsvRow delete
   */
  export type CsvRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
    /**
     * Filter which CsvRow to delete.
     */
    where: CsvRowWhereUniqueInput
  }

  /**
   * CsvRow deleteMany
   */
  export type CsvRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CsvRows to delete
     */
    where?: CsvRowWhereInput
    /**
     * Limit how many CsvRows to delete.
     */
    limit?: number
  }

  /**
   * CsvRow without action
   */
  export type CsvRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvRow
     */
    select?: CsvRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CsvRow
     */
    omit?: CsvRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CsvRowInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CsvFileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    originalName: 'originalName',
    uploadedAt: 'uploadedAt',
    columnHeaders: 'columnHeaders',
    rowCount: 'rowCount'
  };

  export type CsvFileScalarFieldEnum = (typeof CsvFileScalarFieldEnum)[keyof typeof CsvFileScalarFieldEnum]


  export const CsvRowScalarFieldEnum: {
    id: 'id',
    csvFileId: 'csvFileId',
    rowData: 'rowData',
    rowIndex: 'rowIndex'
  };

  export type CsvRowScalarFieldEnum = (typeof CsvRowScalarFieldEnum)[keyof typeof CsvRowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    csvFiles?: CsvFileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    csvFiles?: CsvFileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    csvFiles?: CsvFileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type CsvFileWhereInput = {
    AND?: CsvFileWhereInput | CsvFileWhereInput[]
    OR?: CsvFileWhereInput[]
    NOT?: CsvFileWhereInput | CsvFileWhereInput[]
    id?: StringFilter<"CsvFile"> | string
    userId?: StringFilter<"CsvFile"> | string
    fileName?: StringFilter<"CsvFile"> | string
    originalName?: StringFilter<"CsvFile"> | string
    uploadedAt?: DateTimeFilter<"CsvFile"> | Date | string
    columnHeaders?: StringNullableListFilter<"CsvFile">
    rowCount?: IntFilter<"CsvFile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rows?: CsvRowListRelationFilter
  }

  export type CsvFileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    uploadedAt?: SortOrder
    columnHeaders?: SortOrder
    rowCount?: SortOrder
    user?: UserOrderByWithRelationInput
    rows?: CsvRowOrderByRelationAggregateInput
  }

  export type CsvFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CsvFileWhereInput | CsvFileWhereInput[]
    OR?: CsvFileWhereInput[]
    NOT?: CsvFileWhereInput | CsvFileWhereInput[]
    userId?: StringFilter<"CsvFile"> | string
    fileName?: StringFilter<"CsvFile"> | string
    originalName?: StringFilter<"CsvFile"> | string
    uploadedAt?: DateTimeFilter<"CsvFile"> | Date | string
    columnHeaders?: StringNullableListFilter<"CsvFile">
    rowCount?: IntFilter<"CsvFile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rows?: CsvRowListRelationFilter
  }, "id">

  export type CsvFileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    uploadedAt?: SortOrder
    columnHeaders?: SortOrder
    rowCount?: SortOrder
    _count?: CsvFileCountOrderByAggregateInput
    _avg?: CsvFileAvgOrderByAggregateInput
    _max?: CsvFileMaxOrderByAggregateInput
    _min?: CsvFileMinOrderByAggregateInput
    _sum?: CsvFileSumOrderByAggregateInput
  }

  export type CsvFileScalarWhereWithAggregatesInput = {
    AND?: CsvFileScalarWhereWithAggregatesInput | CsvFileScalarWhereWithAggregatesInput[]
    OR?: CsvFileScalarWhereWithAggregatesInput[]
    NOT?: CsvFileScalarWhereWithAggregatesInput | CsvFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CsvFile"> | string
    userId?: StringWithAggregatesFilter<"CsvFile"> | string
    fileName?: StringWithAggregatesFilter<"CsvFile"> | string
    originalName?: StringWithAggregatesFilter<"CsvFile"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"CsvFile"> | Date | string
    columnHeaders?: StringNullableListFilter<"CsvFile">
    rowCount?: IntWithAggregatesFilter<"CsvFile"> | number
  }

  export type CsvRowWhereInput = {
    AND?: CsvRowWhereInput | CsvRowWhereInput[]
    OR?: CsvRowWhereInput[]
    NOT?: CsvRowWhereInput | CsvRowWhereInput[]
    id?: StringFilter<"CsvRow"> | string
    csvFileId?: StringFilter<"CsvRow"> | string
    rowData?: JsonFilter<"CsvRow">
    rowIndex?: IntFilter<"CsvRow"> | number
    csvFile?: XOR<CsvFileScalarRelationFilter, CsvFileWhereInput>
  }

  export type CsvRowOrderByWithRelationInput = {
    id?: SortOrder
    csvFileId?: SortOrder
    rowData?: SortOrder
    rowIndex?: SortOrder
    csvFile?: CsvFileOrderByWithRelationInput
  }

  export type CsvRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CsvRowWhereInput | CsvRowWhereInput[]
    OR?: CsvRowWhereInput[]
    NOT?: CsvRowWhereInput | CsvRowWhereInput[]
    csvFileId?: StringFilter<"CsvRow"> | string
    rowData?: JsonFilter<"CsvRow">
    rowIndex?: IntFilter<"CsvRow"> | number
    csvFile?: XOR<CsvFileScalarRelationFilter, CsvFileWhereInput>
  }, "id">

  export type CsvRowOrderByWithAggregationInput = {
    id?: SortOrder
    csvFileId?: SortOrder
    rowData?: SortOrder
    rowIndex?: SortOrder
    _count?: CsvRowCountOrderByAggregateInput
    _avg?: CsvRowAvgOrderByAggregateInput
    _max?: CsvRowMaxOrderByAggregateInput
    _min?: CsvRowMinOrderByAggregateInput
    _sum?: CsvRowSumOrderByAggregateInput
  }

  export type CsvRowScalarWhereWithAggregatesInput = {
    AND?: CsvRowScalarWhereWithAggregatesInput | CsvRowScalarWhereWithAggregatesInput[]
    OR?: CsvRowScalarWhereWithAggregatesInput[]
    NOT?: CsvRowScalarWhereWithAggregatesInput | CsvRowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CsvRow"> | string
    csvFileId?: StringWithAggregatesFilter<"CsvRow"> | string
    rowData?: JsonWithAggregatesFilter<"CsvRow">
    rowIndex?: IntWithAggregatesFilter<"CsvRow"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    csvFiles?: CsvFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    csvFiles?: CsvFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    csvFiles?: CsvFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    csvFiles?: CsvFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CsvFileCreateInput = {
    id?: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
    user: UserCreateNestedOneWithoutCsvFilesInput
    rows?: CsvRowCreateNestedManyWithoutCsvFileInput
  }

  export type CsvFileUncheckedCreateInput = {
    id?: string
    userId: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
    rows?: CsvRowUncheckedCreateNestedManyWithoutCsvFileInput
  }

  export type CsvFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCsvFilesNestedInput
    rows?: CsvRowUpdateManyWithoutCsvFileNestedInput
  }

  export type CsvFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
    rows?: CsvRowUncheckedUpdateManyWithoutCsvFileNestedInput
  }

  export type CsvFileCreateManyInput = {
    id?: string
    userId: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
  }

  export type CsvFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
  }

  export type CsvFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowCreateInput = {
    id?: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
    csvFile: CsvFileCreateNestedOneWithoutRowsInput
  }

  export type CsvRowUncheckedCreateInput = {
    id?: string
    csvFileId: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
  }

  export type CsvRowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
    csvFile?: CsvFileUpdateOneRequiredWithoutRowsNestedInput
  }

  export type CsvRowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    csvFileId?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowCreateManyInput = {
    id?: string
    csvFileId: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
  }

  export type CsvRowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    csvFileId?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
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

  export type CsvFileListRelationFilter = {
    every?: CsvFileWhereInput
    some?: CsvFileWhereInput
    none?: CsvFileWhereInput
  }

  export type CsvFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CsvRowListRelationFilter = {
    every?: CsvRowWhereInput
    some?: CsvRowWhereInput
    none?: CsvRowWhereInput
  }

  export type CsvRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CsvFileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    uploadedAt?: SortOrder
    columnHeaders?: SortOrder
    rowCount?: SortOrder
  }

  export type CsvFileAvgOrderByAggregateInput = {
    rowCount?: SortOrder
  }

  export type CsvFileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    uploadedAt?: SortOrder
    rowCount?: SortOrder
  }

  export type CsvFileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    uploadedAt?: SortOrder
    rowCount?: SortOrder
  }

  export type CsvFileSumOrderByAggregateInput = {
    rowCount?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CsvFileScalarRelationFilter = {
    is?: CsvFileWhereInput
    isNot?: CsvFileWhereInput
  }

  export type CsvRowCountOrderByAggregateInput = {
    id?: SortOrder
    csvFileId?: SortOrder
    rowData?: SortOrder
    rowIndex?: SortOrder
  }

  export type CsvRowAvgOrderByAggregateInput = {
    rowIndex?: SortOrder
  }

  export type CsvRowMaxOrderByAggregateInput = {
    id?: SortOrder
    csvFileId?: SortOrder
    rowIndex?: SortOrder
  }

  export type CsvRowMinOrderByAggregateInput = {
    id?: SortOrder
    csvFileId?: SortOrder
    rowIndex?: SortOrder
  }

  export type CsvRowSumOrderByAggregateInput = {
    rowIndex?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CsvFileCreateNestedManyWithoutUserInput = {
    create?: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput> | CsvFileCreateWithoutUserInput[] | CsvFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CsvFileCreateOrConnectWithoutUserInput | CsvFileCreateOrConnectWithoutUserInput[]
    createMany?: CsvFileCreateManyUserInputEnvelope
    connect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
  }

  export type CsvFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput> | CsvFileCreateWithoutUserInput[] | CsvFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CsvFileCreateOrConnectWithoutUserInput | CsvFileCreateOrConnectWithoutUserInput[]
    createMany?: CsvFileCreateManyUserInputEnvelope
    connect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CsvFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput> | CsvFileCreateWithoutUserInput[] | CsvFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CsvFileCreateOrConnectWithoutUserInput | CsvFileCreateOrConnectWithoutUserInput[]
    upsert?: CsvFileUpsertWithWhereUniqueWithoutUserInput | CsvFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CsvFileCreateManyUserInputEnvelope
    set?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    disconnect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    delete?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    connect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    update?: CsvFileUpdateWithWhereUniqueWithoutUserInput | CsvFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CsvFileUpdateManyWithWhereWithoutUserInput | CsvFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CsvFileScalarWhereInput | CsvFileScalarWhereInput[]
  }

  export type CsvFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput> | CsvFileCreateWithoutUserInput[] | CsvFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CsvFileCreateOrConnectWithoutUserInput | CsvFileCreateOrConnectWithoutUserInput[]
    upsert?: CsvFileUpsertWithWhereUniqueWithoutUserInput | CsvFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CsvFileCreateManyUserInputEnvelope
    set?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    disconnect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    delete?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    connect?: CsvFileWhereUniqueInput | CsvFileWhereUniqueInput[]
    update?: CsvFileUpdateWithWhereUniqueWithoutUserInput | CsvFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CsvFileUpdateManyWithWhereWithoutUserInput | CsvFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CsvFileScalarWhereInput | CsvFileScalarWhereInput[]
  }

  export type CsvFileCreatecolumnHeadersInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCsvFilesInput = {
    create?: XOR<UserCreateWithoutCsvFilesInput, UserUncheckedCreateWithoutCsvFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCsvFilesInput
    connect?: UserWhereUniqueInput
  }

  export type CsvRowCreateNestedManyWithoutCsvFileInput = {
    create?: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput> | CsvRowCreateWithoutCsvFileInput[] | CsvRowUncheckedCreateWithoutCsvFileInput[]
    connectOrCreate?: CsvRowCreateOrConnectWithoutCsvFileInput | CsvRowCreateOrConnectWithoutCsvFileInput[]
    createMany?: CsvRowCreateManyCsvFileInputEnvelope
    connect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
  }

  export type CsvRowUncheckedCreateNestedManyWithoutCsvFileInput = {
    create?: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput> | CsvRowCreateWithoutCsvFileInput[] | CsvRowUncheckedCreateWithoutCsvFileInput[]
    connectOrCreate?: CsvRowCreateOrConnectWithoutCsvFileInput | CsvRowCreateOrConnectWithoutCsvFileInput[]
    createMany?: CsvRowCreateManyCsvFileInputEnvelope
    connect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CsvFileUpdatecolumnHeadersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCsvFilesNestedInput = {
    create?: XOR<UserCreateWithoutCsvFilesInput, UserUncheckedCreateWithoutCsvFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCsvFilesInput
    upsert?: UserUpsertWithoutCsvFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCsvFilesInput, UserUpdateWithoutCsvFilesInput>, UserUncheckedUpdateWithoutCsvFilesInput>
  }

  export type CsvRowUpdateManyWithoutCsvFileNestedInput = {
    create?: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput> | CsvRowCreateWithoutCsvFileInput[] | CsvRowUncheckedCreateWithoutCsvFileInput[]
    connectOrCreate?: CsvRowCreateOrConnectWithoutCsvFileInput | CsvRowCreateOrConnectWithoutCsvFileInput[]
    upsert?: CsvRowUpsertWithWhereUniqueWithoutCsvFileInput | CsvRowUpsertWithWhereUniqueWithoutCsvFileInput[]
    createMany?: CsvRowCreateManyCsvFileInputEnvelope
    set?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    disconnect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    delete?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    connect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    update?: CsvRowUpdateWithWhereUniqueWithoutCsvFileInput | CsvRowUpdateWithWhereUniqueWithoutCsvFileInput[]
    updateMany?: CsvRowUpdateManyWithWhereWithoutCsvFileInput | CsvRowUpdateManyWithWhereWithoutCsvFileInput[]
    deleteMany?: CsvRowScalarWhereInput | CsvRowScalarWhereInput[]
  }

  export type CsvRowUncheckedUpdateManyWithoutCsvFileNestedInput = {
    create?: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput> | CsvRowCreateWithoutCsvFileInput[] | CsvRowUncheckedCreateWithoutCsvFileInput[]
    connectOrCreate?: CsvRowCreateOrConnectWithoutCsvFileInput | CsvRowCreateOrConnectWithoutCsvFileInput[]
    upsert?: CsvRowUpsertWithWhereUniqueWithoutCsvFileInput | CsvRowUpsertWithWhereUniqueWithoutCsvFileInput[]
    createMany?: CsvRowCreateManyCsvFileInputEnvelope
    set?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    disconnect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    delete?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    connect?: CsvRowWhereUniqueInput | CsvRowWhereUniqueInput[]
    update?: CsvRowUpdateWithWhereUniqueWithoutCsvFileInput | CsvRowUpdateWithWhereUniqueWithoutCsvFileInput[]
    updateMany?: CsvRowUpdateManyWithWhereWithoutCsvFileInput | CsvRowUpdateManyWithWhereWithoutCsvFileInput[]
    deleteMany?: CsvRowScalarWhereInput | CsvRowScalarWhereInput[]
  }

  export type CsvFileCreateNestedOneWithoutRowsInput = {
    create?: XOR<CsvFileCreateWithoutRowsInput, CsvFileUncheckedCreateWithoutRowsInput>
    connectOrCreate?: CsvFileCreateOrConnectWithoutRowsInput
    connect?: CsvFileWhereUniqueInput
  }

  export type CsvFileUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<CsvFileCreateWithoutRowsInput, CsvFileUncheckedCreateWithoutRowsInput>
    connectOrCreate?: CsvFileCreateOrConnectWithoutRowsInput
    upsert?: CsvFileUpsertWithoutRowsInput
    connect?: CsvFileWhereUniqueInput
    update?: XOR<XOR<CsvFileUpdateToOneWithWhereWithoutRowsInput, CsvFileUpdateWithoutRowsInput>, CsvFileUncheckedUpdateWithoutRowsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CsvFileCreateWithoutUserInput = {
    id?: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
    rows?: CsvRowCreateNestedManyWithoutCsvFileInput
  }

  export type CsvFileUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
    rows?: CsvRowUncheckedCreateNestedManyWithoutCsvFileInput
  }

  export type CsvFileCreateOrConnectWithoutUserInput = {
    where: CsvFileWhereUniqueInput
    create: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput>
  }

  export type CsvFileCreateManyUserInputEnvelope = {
    data: CsvFileCreateManyUserInput | CsvFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CsvFileUpsertWithWhereUniqueWithoutUserInput = {
    where: CsvFileWhereUniqueInput
    update: XOR<CsvFileUpdateWithoutUserInput, CsvFileUncheckedUpdateWithoutUserInput>
    create: XOR<CsvFileCreateWithoutUserInput, CsvFileUncheckedCreateWithoutUserInput>
  }

  export type CsvFileUpdateWithWhereUniqueWithoutUserInput = {
    where: CsvFileWhereUniqueInput
    data: XOR<CsvFileUpdateWithoutUserInput, CsvFileUncheckedUpdateWithoutUserInput>
  }

  export type CsvFileUpdateManyWithWhereWithoutUserInput = {
    where: CsvFileScalarWhereInput
    data: XOR<CsvFileUpdateManyMutationInput, CsvFileUncheckedUpdateManyWithoutUserInput>
  }

  export type CsvFileScalarWhereInput = {
    AND?: CsvFileScalarWhereInput | CsvFileScalarWhereInput[]
    OR?: CsvFileScalarWhereInput[]
    NOT?: CsvFileScalarWhereInput | CsvFileScalarWhereInput[]
    id?: StringFilter<"CsvFile"> | string
    userId?: StringFilter<"CsvFile"> | string
    fileName?: StringFilter<"CsvFile"> | string
    originalName?: StringFilter<"CsvFile"> | string
    uploadedAt?: DateTimeFilter<"CsvFile"> | Date | string
    columnHeaders?: StringNullableListFilter<"CsvFile">
    rowCount?: IntFilter<"CsvFile"> | number
  }

  export type UserCreateWithoutCsvFilesInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutCsvFilesInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutCsvFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCsvFilesInput, UserUncheckedCreateWithoutCsvFilesInput>
  }

  export type CsvRowCreateWithoutCsvFileInput = {
    id?: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
  }

  export type CsvRowUncheckedCreateWithoutCsvFileInput = {
    id?: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
  }

  export type CsvRowCreateOrConnectWithoutCsvFileInput = {
    where: CsvRowWhereUniqueInput
    create: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput>
  }

  export type CsvRowCreateManyCsvFileInputEnvelope = {
    data: CsvRowCreateManyCsvFileInput | CsvRowCreateManyCsvFileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCsvFilesInput = {
    update: XOR<UserUpdateWithoutCsvFilesInput, UserUncheckedUpdateWithoutCsvFilesInput>
    create: XOR<UserCreateWithoutCsvFilesInput, UserUncheckedCreateWithoutCsvFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCsvFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCsvFilesInput, UserUncheckedUpdateWithoutCsvFilesInput>
  }

  export type UserUpdateWithoutCsvFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutCsvFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CsvRowUpsertWithWhereUniqueWithoutCsvFileInput = {
    where: CsvRowWhereUniqueInput
    update: XOR<CsvRowUpdateWithoutCsvFileInput, CsvRowUncheckedUpdateWithoutCsvFileInput>
    create: XOR<CsvRowCreateWithoutCsvFileInput, CsvRowUncheckedCreateWithoutCsvFileInput>
  }

  export type CsvRowUpdateWithWhereUniqueWithoutCsvFileInput = {
    where: CsvRowWhereUniqueInput
    data: XOR<CsvRowUpdateWithoutCsvFileInput, CsvRowUncheckedUpdateWithoutCsvFileInput>
  }

  export type CsvRowUpdateManyWithWhereWithoutCsvFileInput = {
    where: CsvRowScalarWhereInput
    data: XOR<CsvRowUpdateManyMutationInput, CsvRowUncheckedUpdateManyWithoutCsvFileInput>
  }

  export type CsvRowScalarWhereInput = {
    AND?: CsvRowScalarWhereInput | CsvRowScalarWhereInput[]
    OR?: CsvRowScalarWhereInput[]
    NOT?: CsvRowScalarWhereInput | CsvRowScalarWhereInput[]
    id?: StringFilter<"CsvRow"> | string
    csvFileId?: StringFilter<"CsvRow"> | string
    rowData?: JsonFilter<"CsvRow">
    rowIndex?: IntFilter<"CsvRow"> | number
  }

  export type CsvFileCreateWithoutRowsInput = {
    id?: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
    user: UserCreateNestedOneWithoutCsvFilesInput
  }

  export type CsvFileUncheckedCreateWithoutRowsInput = {
    id?: string
    userId: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
  }

  export type CsvFileCreateOrConnectWithoutRowsInput = {
    where: CsvFileWhereUniqueInput
    create: XOR<CsvFileCreateWithoutRowsInput, CsvFileUncheckedCreateWithoutRowsInput>
  }

  export type CsvFileUpsertWithoutRowsInput = {
    update: XOR<CsvFileUpdateWithoutRowsInput, CsvFileUncheckedUpdateWithoutRowsInput>
    create: XOR<CsvFileCreateWithoutRowsInput, CsvFileUncheckedCreateWithoutRowsInput>
    where?: CsvFileWhereInput
  }

  export type CsvFileUpdateToOneWithWhereWithoutRowsInput = {
    where?: CsvFileWhereInput
    data: XOR<CsvFileUpdateWithoutRowsInput, CsvFileUncheckedUpdateWithoutRowsInput>
  }

  export type CsvFileUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCsvFilesNestedInput
  }

  export type CsvFileUncheckedUpdateWithoutRowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
  }

  export type CsvFileCreateManyUserInput = {
    id?: string
    fileName: string
    originalName: string
    uploadedAt?: Date | string
    columnHeaders?: CsvFileCreatecolumnHeadersInput | string[]
    rowCount: number
  }

  export type CsvFileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
    rows?: CsvRowUpdateManyWithoutCsvFileNestedInput
  }

  export type CsvFileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
    rows?: CsvRowUncheckedUpdateManyWithoutCsvFileNestedInput
  }

  export type CsvFileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnHeaders?: CsvFileUpdatecolumnHeadersInput | string[]
    rowCount?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowCreateManyCsvFileInput = {
    id?: string
    rowData: JsonNullValueInput | InputJsonValue
    rowIndex: number
  }

  export type CsvRowUpdateWithoutCsvFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowUncheckedUpdateWithoutCsvFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CsvRowUncheckedUpdateManyWithoutCsvFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowData?: JsonNullValueInput | InputJsonValue
    rowIndex?: IntFieldUpdateOperationsInput | number
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