import {
    deepEqual
} from 'assert';
import {
    Validation, success, failure,
    bind,
    compose,
    pipe,
    lift,
    map,
    tee,
    tryCatch,
    doubleMap
} from '../src';

type User = {
    name: string,
    email: string
}

const validate1 = (input: User): Validation<string, User> =>
    input.name === ""
        ? failure<string, User>("Name must not be blank")
        : success<string, User>(input);

const validate2 = (input: User): Validation<string, User> =>
    input.name.length > 50
        ? failure<string, User>("Name must not be longer than 50 chars")
        : success<string, User>(input);

const validate3 = (input: User): Validation<string, User> =>
    input.email === ""
        ? failure<string, User>("Email must not be blank")
        : success<string, User>(input);

/*
    bind
*/

const fValidate2 = bind(validate2);

deepEqual(
    fValidate2(success({ name: "012345678901234567890123456789012345678901234567890", email: "" })),
    failure("Name must not be longer than 50 chars")
);

/*
    compose
*/

const composedValidation =
    compose(
        validate3,
        validate2,
        validate1
    );

deepEqual(
    composedValidation({ name: "", email: "" }),
    failure("Name must not be blank")
);

deepEqual(
    composedValidation({ name: "Alice", email: "" }),
    failure("Email must not be blank")
);

deepEqual(
    composedValidation({ name: "Alice", email: "good" }),
    success({ name: "Alice", email: "good" })
);

/*
    pipe
*/

const pipedValidation =
    pipe(
        validate1,
        validate2,
        validate3
    );

deepEqual(
    pipedValidation({ name: "", email: "" }),
    failure("Name must not be blank")
);

deepEqual(
    pipedValidation({ name: "Alice", email: "" }),
    failure("Email must not be blank")
);

deepEqual(
    pipedValidation({ name: "Alice", email: "good" }),
    success({ name: "Alice", email: "good" })
);

/*
    lift
*/

const canonicalizeEmail = (input: User) => ({
    ...input,
    email: input.email.trim().toLowerCase()
});

deepEqual(
    lift(canonicalizeEmail)({ name: "Alice", email: " gOOd " }),
    success({ name: "Alice", email: "good" })
);

/*
    map
*/

deepEqual(
    map(canonicalizeEmail)(success({ name: "Alice", email: " gOOd " })),
    success({ name: "Alice", email: "good" })
);

deepEqual(
    map(canonicalizeEmail)(failure('Error')),
    failure('Error')
);

/*
    tee / tap
*/

const updateDatabase = (input: User): void => { };

deepEqual(
    tee(updateDatabase)({ name: "Alice", email: "good" }),
    { name: "Alice", email: "good" }
);

/*
    tryCatch
*/

const failToUpdateDatabase = (input: User): void => { throw "Update database failed" };

deepEqual(
    tryCatch(failToUpdateDatabase)({ name: "Alice", email: "good" }),
    failure("Update database failed")
)

/*
    doubleMap
*/

const changeCase = doubleMap((s: string) => s.toUpperCase(), (s: string) => s.toLowerCase());

deepEqual(
    changeCase(success('SUCCESS')),
    success('success')
);

deepEqual(
    changeCase(failure('failure')),
    failure('FAILURE')
);


/*
    plus
*/

// const log = doubleMap(
//     (l: string) => {
//         console.error(`ERROR. ${l}`);
//         return l;
//     },
//     (a: string) => {
//         console.error(`DEBUG. Success so far: ${a}`);
//         return a;
//     }
// );

// const useCase = pipe(
//     validate1,
//     validate2,
//     validate3,
//     lift(canonicalizeEmail),
//     lift<string, User, User>(tee(updateDatabase))
// )
