
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Word
 * 
 */
export type Word = {
  id: number
  word: string
  meaning: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Sentense
 * 
 */
export type Sentense = {
  id: number
  sentense: string
  meaning: string | null
  wordId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Words
 * const words = await prisma.word.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Words
   * const words = await prisma.word.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<GlobalReject>;

  /**
   * `prisma.sentense`: Exposes CRUD operations for the **Sentense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sentenses
    * const sentenses = await prisma.sentense.findMany()
    * ```
    */
  get sentense(): Prisma.SentenseDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Word: 'Word',
    Sentense: 'Sentense'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WordCountOutputType
   */


  export type WordCountOutputType = {
    sentenses: number
  }

  export type WordCountOutputTypeSelect = {
    sentenses?: boolean
  }

  export type WordCountOutputTypeGetPayload<S extends boolean | null | undefined | WordCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WordCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WordCountOutputTypeArgs)
    ? WordCountOutputType 
    : S extends { select: any } & (WordCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WordCountOutputType ? WordCountOutputType[P] : never
  } 
      : WordCountOutputType




  // Custom InputTypes

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Word
   */


  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    word: string | null
    meaning: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    word: string | null
    meaning: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    meaning: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    meaning?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    meaning?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    meaning?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WordAggregateArgs = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs = {
    where?: WordWhereInput
    orderBy?: Enumerable<WordOrderByWithAggregationInput>
    by: WordScalarFieldEnum[]
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }


  export type WordGroupByOutputType = {
    id: number
    word: string
    meaning: string
    createdAt: Date
    updatedAt: Date
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect = {
    id?: boolean
    word?: boolean
    meaning?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentenses?: boolean | Word$sentensesArgs
    _count?: boolean | WordCountOutputTypeArgs
  }


  export type WordInclude = {
    sentenses?: boolean | Word$sentensesArgs
    _count?: boolean | WordCountOutputTypeArgs
  }

  export type WordGetPayload<S extends boolean | null | undefined | WordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Word :
    S extends undefined ? never :
    S extends { include: any } & (WordArgs | WordFindManyArgs)
    ? Word  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sentenses' ? Array < SentenseGetPayload<S['include'][P]>>  :
        P extends '_count' ? WordCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WordArgs | WordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sentenses' ? Array < SentenseGetPayload<S['select'][P]>>  :
        P extends '_count' ? WordCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Word ? Word[P] : never
  } 
      : Word


  type WordCountArgs = 
    Omit<WordFindManyArgs, 'select' | 'include'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Word'> extends True ? Prisma__WordClient<WordGetPayload<T>> : Prisma__WordClient<WordGetPayload<T> | null, null>

    /**
     * Find one Word that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WordFindUniqueOrThrowArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Word'> extends True ? Prisma__WordClient<WordGetPayload<T>> : Prisma__WordClient<WordGetPayload<T> | null, null>

    /**
     * Find the first Word that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WordFindFirstOrThrowArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WordFindManyArgs>(
      args?: SelectSubset<T, WordFindManyArgs>
    ): Prisma.PrismaPromise<Array<WordGetPayload<T>>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
    **/
    create<T extends WordCreateArgs>(
      args: SelectSubset<T, WordCreateArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Create many Words.
     *     @param {WordCreateManyArgs} args - Arguments to create many Words.
     *     @example
     *     // Create many Words
     *     const word = await prisma.word.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordCreateManyArgs>(
      args?: SelectSubset<T, WordCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
    **/
    delete<T extends WordDeleteArgs>(
      args: SelectSubset<T, WordDeleteArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordUpdateArgs>(
      args: SelectSubset<T, WordUpdateArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordDeleteManyArgs>(
      args?: SelectSubset<T, WordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordUpdateManyArgs>(
      args: SelectSubset<T, WordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
    **/
    upsert<T extends WordUpsertArgs>(
      args: SelectSubset<T, WordUpsertArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sentenses<T extends Word$sentensesArgs= {}>(args?: Subset<T, Word$sentensesArgs>): Prisma.PrismaPromise<Array<SentenseGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Word base type for findUnique actions
   */
  export type WordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUnique
   */
  export interface WordFindUniqueArgs extends WordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word base type for findFirst actions
   */
  export type WordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: Enumerable<WordScalarFieldEnum>
  }

  /**
   * Word findFirst
   */
  export interface WordFindFirstArgs extends WordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: Enumerable<WordScalarFieldEnum>
  }


  /**
   * Word findMany
   */
  export type WordFindManyArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: Enumerable<WordScalarFieldEnum>
  }


  /**
   * Word create
   */
  export type WordCreateArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }


  /**
   * Word createMany
   */
  export type WordCreateManyArgs = {
    /**
     * The data used to create many Words.
     */
    data: Enumerable<WordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Word update
   */
  export type WordUpdateArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
  }


  /**
   * Word upsert
   */
  export type WordUpsertArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }


  /**
   * Word delete
   */
  export type WordDeleteArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
  }


  /**
   * Word.sentenses
   */
  export type Word$sentensesArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    where?: SentenseWhereInput
    orderBy?: Enumerable<SentenseOrderByWithRelationInput>
    cursor?: SentenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SentenseScalarFieldEnum>
  }


  /**
   * Word without action
   */
  export type WordArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
  }



  /**
   * Model Sentense
   */


  export type AggregateSentense = {
    _count: SentenseCountAggregateOutputType | null
    _avg: SentenseAvgAggregateOutputType | null
    _sum: SentenseSumAggregateOutputType | null
    _min: SentenseMinAggregateOutputType | null
    _max: SentenseMaxAggregateOutputType | null
  }

  export type SentenseAvgAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type SentenseSumAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type SentenseMinAggregateOutputType = {
    id: number | null
    sentense: string | null
    meaning: string | null
    wordId: number | null
  }

  export type SentenseMaxAggregateOutputType = {
    id: number | null
    sentense: string | null
    meaning: string | null
    wordId: number | null
  }

  export type SentenseCountAggregateOutputType = {
    id: number
    sentense: number
    meaning: number
    wordId: number
    _all: number
  }


  export type SentenseAvgAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type SentenseSumAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type SentenseMinAggregateInputType = {
    id?: true
    sentense?: true
    meaning?: true
    wordId?: true
  }

  export type SentenseMaxAggregateInputType = {
    id?: true
    sentense?: true
    meaning?: true
    wordId?: true
  }

  export type SentenseCountAggregateInputType = {
    id?: true
    sentense?: true
    meaning?: true
    wordId?: true
    _all?: true
  }

  export type SentenseAggregateArgs = {
    /**
     * Filter which Sentense to aggregate.
     */
    where?: SentenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentenses to fetch.
     */
    orderBy?: Enumerable<SentenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sentenses
    **/
    _count?: true | SentenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentenseMaxAggregateInputType
  }

  export type GetSentenseAggregateType<T extends SentenseAggregateArgs> = {
        [P in keyof T & keyof AggregateSentense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentense[P]>
      : GetScalarType<T[P], AggregateSentense[P]>
  }




  export type SentenseGroupByArgs = {
    where?: SentenseWhereInput
    orderBy?: Enumerable<SentenseOrderByWithAggregationInput>
    by: SentenseScalarFieldEnum[]
    having?: SentenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentenseCountAggregateInputType | true
    _avg?: SentenseAvgAggregateInputType
    _sum?: SentenseSumAggregateInputType
    _min?: SentenseMinAggregateInputType
    _max?: SentenseMaxAggregateInputType
  }


  export type SentenseGroupByOutputType = {
    id: number
    sentense: string
    meaning: string | null
    wordId: number
    _count: SentenseCountAggregateOutputType | null
    _avg: SentenseAvgAggregateOutputType | null
    _sum: SentenseSumAggregateOutputType | null
    _min: SentenseMinAggregateOutputType | null
    _max: SentenseMaxAggregateOutputType | null
  }

  type GetSentenseGroupByPayload<T extends SentenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SentenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentenseGroupByOutputType[P]>
            : GetScalarType<T[P], SentenseGroupByOutputType[P]>
        }
      >
    >


  export type SentenseSelect = {
    id?: boolean
    sentense?: boolean
    meaning?: boolean
    wordId?: boolean
    word?: boolean | WordArgs
  }


  export type SentenseInclude = {
    word?: boolean | WordArgs
  }

  export type SentenseGetPayload<S extends boolean | null | undefined | SentenseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Sentense :
    S extends undefined ? never :
    S extends { include: any } & (SentenseArgs | SentenseFindManyArgs)
    ? Sentense  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'word' ? WordGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SentenseArgs | SentenseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'word' ? WordGetPayload<S['select'][P]> :  P extends keyof Sentense ? Sentense[P] : never
  } 
      : Sentense


  type SentenseCountArgs = 
    Omit<SentenseFindManyArgs, 'select' | 'include'> & {
      select?: SentenseCountAggregateInputType | true
    }

  export interface SentenseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Sentense that matches the filter.
     * @param {SentenseFindUniqueArgs} args - Arguments to find a Sentense
     * @example
     * // Get one Sentense
     * const sentense = await prisma.sentense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SentenseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SentenseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sentense'> extends True ? Prisma__SentenseClient<SentenseGetPayload<T>> : Prisma__SentenseClient<SentenseGetPayload<T> | null, null>

    /**
     * Find one Sentense that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SentenseFindUniqueOrThrowArgs} args - Arguments to find a Sentense
     * @example
     * // Get one Sentense
     * const sentense = await prisma.sentense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SentenseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SentenseFindUniqueOrThrowArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Find the first Sentense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseFindFirstArgs} args - Arguments to find a Sentense
     * @example
     * // Get one Sentense
     * const sentense = await prisma.sentense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SentenseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SentenseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sentense'> extends True ? Prisma__SentenseClient<SentenseGetPayload<T>> : Prisma__SentenseClient<SentenseGetPayload<T> | null, null>

    /**
     * Find the first Sentense that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseFindFirstOrThrowArgs} args - Arguments to find a Sentense
     * @example
     * // Get one Sentense
     * const sentense = await prisma.sentense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SentenseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SentenseFindFirstOrThrowArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Find zero or more Sentenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sentenses
     * const sentenses = await prisma.sentense.findMany()
     * 
     * // Get first 10 Sentenses
     * const sentenses = await prisma.sentense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentenseWithIdOnly = await prisma.sentense.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SentenseFindManyArgs>(
      args?: SelectSubset<T, SentenseFindManyArgs>
    ): Prisma.PrismaPromise<Array<SentenseGetPayload<T>>>

    /**
     * Create a Sentense.
     * @param {SentenseCreateArgs} args - Arguments to create a Sentense.
     * @example
     * // Create one Sentense
     * const Sentense = await prisma.sentense.create({
     *   data: {
     *     // ... data to create a Sentense
     *   }
     * })
     * 
    **/
    create<T extends SentenseCreateArgs>(
      args: SelectSubset<T, SentenseCreateArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Create many Sentenses.
     *     @param {SentenseCreateManyArgs} args - Arguments to create many Sentenses.
     *     @example
     *     // Create many Sentenses
     *     const sentense = await prisma.sentense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SentenseCreateManyArgs>(
      args?: SelectSubset<T, SentenseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sentense.
     * @param {SentenseDeleteArgs} args - Arguments to delete one Sentense.
     * @example
     * // Delete one Sentense
     * const Sentense = await prisma.sentense.delete({
     *   where: {
     *     // ... filter to delete one Sentense
     *   }
     * })
     * 
    **/
    delete<T extends SentenseDeleteArgs>(
      args: SelectSubset<T, SentenseDeleteArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Update one Sentense.
     * @param {SentenseUpdateArgs} args - Arguments to update one Sentense.
     * @example
     * // Update one Sentense
     * const sentense = await prisma.sentense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SentenseUpdateArgs>(
      args: SelectSubset<T, SentenseUpdateArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Delete zero or more Sentenses.
     * @param {SentenseDeleteManyArgs} args - Arguments to filter Sentenses to delete.
     * @example
     * // Delete a few Sentenses
     * const { count } = await prisma.sentense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SentenseDeleteManyArgs>(
      args?: SelectSubset<T, SentenseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sentenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sentenses
     * const sentense = await prisma.sentense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SentenseUpdateManyArgs>(
      args: SelectSubset<T, SentenseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sentense.
     * @param {SentenseUpsertArgs} args - Arguments to update or create a Sentense.
     * @example
     * // Update or create a Sentense
     * const sentense = await prisma.sentense.upsert({
     *   create: {
     *     // ... data to create a Sentense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sentense we want to update
     *   }
     * })
    **/
    upsert<T extends SentenseUpsertArgs>(
      args: SelectSubset<T, SentenseUpsertArgs>
    ): Prisma__SentenseClient<SentenseGetPayload<T>>

    /**
     * Count the number of Sentenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseCountArgs} args - Arguments to filter Sentenses to count.
     * @example
     * // Count the number of Sentenses
     * const count = await prisma.sentense.count({
     *   where: {
     *     // ... the filter for the Sentenses we want to count
     *   }
     * })
    **/
    count<T extends SentenseCountArgs>(
      args?: Subset<T, SentenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sentense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentenseAggregateArgs>(args: Subset<T, SentenseAggregateArgs>): Prisma.PrismaPromise<GetSentenseAggregateType<T>>

    /**
     * Group by Sentense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenseGroupByArgs} args - Group by arguments.
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
      T extends SentenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentenseGroupByArgs['orderBy'] }
        : { orderBy?: SentenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SentenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sentense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SentenseClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    word<T extends WordArgs= {}>(args?: Subset<T, WordArgs>): Prisma__WordClient<WordGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Sentense base type for findUnique actions
   */
  export type SentenseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter, which Sentense to fetch.
     */
    where: SentenseWhereUniqueInput
  }

  /**
   * Sentense findUnique
   */
  export interface SentenseFindUniqueArgs extends SentenseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sentense findUniqueOrThrow
   */
  export type SentenseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter, which Sentense to fetch.
     */
    where: SentenseWhereUniqueInput
  }


  /**
   * Sentense base type for findFirst actions
   */
  export type SentenseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter, which Sentense to fetch.
     */
    where?: SentenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentenses to fetch.
     */
    orderBy?: Enumerable<SentenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentenses.
     */
    cursor?: SentenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentenses.
     */
    distinct?: Enumerable<SentenseScalarFieldEnum>
  }

  /**
   * Sentense findFirst
   */
  export interface SentenseFindFirstArgs extends SentenseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sentense findFirstOrThrow
   */
  export type SentenseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter, which Sentense to fetch.
     */
    where?: SentenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentenses to fetch.
     */
    orderBy?: Enumerable<SentenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentenses.
     */
    cursor?: SentenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentenses.
     */
    distinct?: Enumerable<SentenseScalarFieldEnum>
  }


  /**
   * Sentense findMany
   */
  export type SentenseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter, which Sentenses to fetch.
     */
    where?: SentenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentenses to fetch.
     */
    orderBy?: Enumerable<SentenseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sentenses.
     */
    cursor?: SentenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentenses.
     */
    skip?: number
    distinct?: Enumerable<SentenseScalarFieldEnum>
  }


  /**
   * Sentense create
   */
  export type SentenseCreateArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * The data needed to create a Sentense.
     */
    data: XOR<SentenseCreateInput, SentenseUncheckedCreateInput>
  }


  /**
   * Sentense createMany
   */
  export type SentenseCreateManyArgs = {
    /**
     * The data used to create many Sentenses.
     */
    data: Enumerable<SentenseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sentense update
   */
  export type SentenseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * The data needed to update a Sentense.
     */
    data: XOR<SentenseUpdateInput, SentenseUncheckedUpdateInput>
    /**
     * Choose, which Sentense to update.
     */
    where: SentenseWhereUniqueInput
  }


  /**
   * Sentense updateMany
   */
  export type SentenseUpdateManyArgs = {
    /**
     * The data used to update Sentenses.
     */
    data: XOR<SentenseUpdateManyMutationInput, SentenseUncheckedUpdateManyInput>
    /**
     * Filter which Sentenses to update
     */
    where?: SentenseWhereInput
  }


  /**
   * Sentense upsert
   */
  export type SentenseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * The filter to search for the Sentense to update in case it exists.
     */
    where: SentenseWhereUniqueInput
    /**
     * In case the Sentense found by the `where` argument doesn't exist, create a new Sentense with this data.
     */
    create: XOR<SentenseCreateInput, SentenseUncheckedCreateInput>
    /**
     * In case the Sentense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentenseUpdateInput, SentenseUncheckedUpdateInput>
  }


  /**
   * Sentense delete
   */
  export type SentenseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
    /**
     * Filter which Sentense to delete.
     */
    where: SentenseWhereUniqueInput
  }


  /**
   * Sentense deleteMany
   */
  export type SentenseDeleteManyArgs = {
    /**
     * Filter which Sentenses to delete
     */
    where?: SentenseWhereInput
  }


  /**
   * Sentense without action
   */
  export type SentenseArgs = {
    /**
     * Select specific fields to fetch from the Sentense
     */
    select?: SentenseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenseInclude | null
  }



  /**
   * Enums
   */

  export const SentenseScalarFieldEnum: {
    id: 'id',
    sentense: 'sentense',
    meaning: 'meaning',
    wordId: 'wordId'
  };

  export type SentenseScalarFieldEnum = (typeof SentenseScalarFieldEnum)[keyof typeof SentenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    meaning: 'meaning',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WordWhereInput = {
    AND?: Enumerable<WordWhereInput>
    OR?: Enumerable<WordWhereInput>
    NOT?: Enumerable<WordWhereInput>
    id?: IntFilter | number
    word?: StringFilter | string
    meaning?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    sentenses?: SentenseListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    meaning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentenses?: SentenseOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = {
    id?: number
    word?: string
  }

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    meaning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WordScalarWhereWithAggregatesInput>
    OR?: Enumerable<WordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    word?: StringWithAggregatesFilter | string
    meaning?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SentenseWhereInput = {
    AND?: Enumerable<SentenseWhereInput>
    OR?: Enumerable<SentenseWhereInput>
    NOT?: Enumerable<SentenseWhereInput>
    id?: IntFilter | number
    sentense?: StringFilter | string
    meaning?: StringNullableFilter | string | null
    wordId?: IntFilter | number
    word?: XOR<WordRelationFilter, WordWhereInput>
  }

  export type SentenseOrderByWithRelationInput = {
    id?: SortOrder
    sentense?: SortOrder
    meaning?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type SentenseWhereUniqueInput = {
    id?: number
  }

  export type SentenseOrderByWithAggregationInput = {
    id?: SortOrder
    sentense?: SortOrder
    meaning?: SortOrder
    wordId?: SortOrder
    _count?: SentenseCountOrderByAggregateInput
    _avg?: SentenseAvgOrderByAggregateInput
    _max?: SentenseMaxOrderByAggregateInput
    _min?: SentenseMinOrderByAggregateInput
    _sum?: SentenseSumOrderByAggregateInput
  }

  export type SentenseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SentenseScalarWhereWithAggregatesInput>
    OR?: Enumerable<SentenseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SentenseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    sentense?: StringWithAggregatesFilter | string
    meaning?: StringNullableWithAggregatesFilter | string | null
    wordId?: IntWithAggregatesFilter | number
  }

  export type WordCreateInput = {
    word: string
    meaning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentenses?: SentenseCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    word: string
    meaning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentenses?: SentenseUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentenses?: SentenseUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentenses?: SentenseUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: number
    word: string
    meaning: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenseCreateInput = {
    sentense: string
    meaning?: string | null
    word: WordCreateNestedOneWithoutSentensesInput
  }

  export type SentenseUncheckedCreateInput = {
    id?: number
    sentense: string
    meaning?: string | null
    wordId: number
  }

  export type SentenseUpdateInput = {
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutSentensesNestedInput
  }

  export type SentenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type SentenseCreateManyInput = {
    id?: number
    sentense: string
    meaning?: string | null
    wordId: number
  }

  export type SentenseUpdateManyMutationInput = {
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SentenseListRelationFilter = {
    every?: SentenseWhereInput
    some?: SentenseWhereInput
    none?: SentenseWhereInput
  }

  export type SentenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    meaning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    meaning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    meaning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type WordRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type SentenseCountOrderByAggregateInput = {
    id?: SortOrder
    sentense?: SortOrder
    meaning?: SortOrder
    wordId?: SortOrder
  }

  export type SentenseAvgOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type SentenseMaxOrderByAggregateInput = {
    id?: SortOrder
    sentense?: SortOrder
    meaning?: SortOrder
    wordId?: SortOrder
  }

  export type SentenseMinOrderByAggregateInput = {
    id?: SortOrder
    sentense?: SortOrder
    meaning?: SortOrder
    wordId?: SortOrder
  }

  export type SentenseSumOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type SentenseCreateNestedManyWithoutWordInput = {
    create?: XOR<Enumerable<SentenseCreateWithoutWordInput>, Enumerable<SentenseUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenseCreateOrConnectWithoutWordInput>
    createMany?: SentenseCreateManyWordInputEnvelope
    connect?: Enumerable<SentenseWhereUniqueInput>
  }

  export type SentenseUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<Enumerable<SentenseCreateWithoutWordInput>, Enumerable<SentenseUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenseCreateOrConnectWithoutWordInput>
    createMany?: SentenseCreateManyWordInputEnvelope
    connect?: Enumerable<SentenseWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SentenseUpdateManyWithoutWordNestedInput = {
    create?: XOR<Enumerable<SentenseCreateWithoutWordInput>, Enumerable<SentenseUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenseCreateOrConnectWithoutWordInput>
    upsert?: Enumerable<SentenseUpsertWithWhereUniqueWithoutWordInput>
    createMany?: SentenseCreateManyWordInputEnvelope
    set?: Enumerable<SentenseWhereUniqueInput>
    disconnect?: Enumerable<SentenseWhereUniqueInput>
    delete?: Enumerable<SentenseWhereUniqueInput>
    connect?: Enumerable<SentenseWhereUniqueInput>
    update?: Enumerable<SentenseUpdateWithWhereUniqueWithoutWordInput>
    updateMany?: Enumerable<SentenseUpdateManyWithWhereWithoutWordInput>
    deleteMany?: Enumerable<SentenseScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SentenseUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<Enumerable<SentenseCreateWithoutWordInput>, Enumerable<SentenseUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenseCreateOrConnectWithoutWordInput>
    upsert?: Enumerable<SentenseUpsertWithWhereUniqueWithoutWordInput>
    createMany?: SentenseCreateManyWordInputEnvelope
    set?: Enumerable<SentenseWhereUniqueInput>
    disconnect?: Enumerable<SentenseWhereUniqueInput>
    delete?: Enumerable<SentenseWhereUniqueInput>
    connect?: Enumerable<SentenseWhereUniqueInput>
    update?: Enumerable<SentenseUpdateWithWhereUniqueWithoutWordInput>
    updateMany?: Enumerable<SentenseUpdateManyWithWhereWithoutWordInput>
    deleteMany?: Enumerable<SentenseScalarWhereInput>
  }

  export type WordCreateNestedOneWithoutSentensesInput = {
    create?: XOR<WordCreateWithoutSentensesInput, WordUncheckedCreateWithoutSentensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSentensesInput
    connect?: WordWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WordUpdateOneRequiredWithoutSentensesNestedInput = {
    create?: XOR<WordCreateWithoutSentensesInput, WordUncheckedCreateWithoutSentensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSentensesInput
    upsert?: WordUpsertWithoutSentensesInput
    connect?: WordWhereUniqueInput
    update?: XOR<WordUpdateWithoutSentensesInput, WordUncheckedUpdateWithoutSentensesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type SentenseCreateWithoutWordInput = {
    sentense: string
    meaning?: string | null
  }

  export type SentenseUncheckedCreateWithoutWordInput = {
    id?: number
    sentense: string
    meaning?: string | null
  }

  export type SentenseCreateOrConnectWithoutWordInput = {
    where: SentenseWhereUniqueInput
    create: XOR<SentenseCreateWithoutWordInput, SentenseUncheckedCreateWithoutWordInput>
  }

  export type SentenseCreateManyWordInputEnvelope = {
    data: Enumerable<SentenseCreateManyWordInput>
    skipDuplicates?: boolean
  }

  export type SentenseUpsertWithWhereUniqueWithoutWordInput = {
    where: SentenseWhereUniqueInput
    update: XOR<SentenseUpdateWithoutWordInput, SentenseUncheckedUpdateWithoutWordInput>
    create: XOR<SentenseCreateWithoutWordInput, SentenseUncheckedCreateWithoutWordInput>
  }

  export type SentenseUpdateWithWhereUniqueWithoutWordInput = {
    where: SentenseWhereUniqueInput
    data: XOR<SentenseUpdateWithoutWordInput, SentenseUncheckedUpdateWithoutWordInput>
  }

  export type SentenseUpdateManyWithWhereWithoutWordInput = {
    where: SentenseScalarWhereInput
    data: XOR<SentenseUpdateManyMutationInput, SentenseUncheckedUpdateManyWithoutSentensesInput>
  }

  export type SentenseScalarWhereInput = {
    AND?: Enumerable<SentenseScalarWhereInput>
    OR?: Enumerable<SentenseScalarWhereInput>
    NOT?: Enumerable<SentenseScalarWhereInput>
    id?: IntFilter | number
    sentense?: StringFilter | string
    meaning?: StringNullableFilter | string | null
    wordId?: IntFilter | number
  }

  export type WordCreateWithoutSentensesInput = {
    word: string
    meaning: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordUncheckedCreateWithoutSentensesInput = {
    id?: number
    word: string
    meaning: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordCreateOrConnectWithoutSentensesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSentensesInput, WordUncheckedCreateWithoutSentensesInput>
  }

  export type WordUpsertWithoutSentensesInput = {
    update: XOR<WordUpdateWithoutSentensesInput, WordUncheckedUpdateWithoutSentensesInput>
    create: XOR<WordCreateWithoutSentensesInput, WordUncheckedCreateWithoutSentensesInput>
  }

  export type WordUpdateWithoutSentensesInput = {
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateWithoutSentensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenseCreateManyWordInput = {
    id?: number
    sentense: string
    meaning?: string | null
  }

  export type SentenseUpdateWithoutWordInput = {
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentenseUncheckedUpdateWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentenseUncheckedUpdateManyWithoutSentensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentense?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
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