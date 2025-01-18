interface ErrMethods {
  statusIsEqualTo(exception): void;
  statusIsUnauthorized(): void;
  statusIsBadRequest(): void;
  message(): void;
  status(exception): number;
}

export const Err: {} = {
  status(exception): number {
    return exception?.response?.status ?? 0;
  },
  statusIsEqualTo(exception) {},
  statusIsBadRequest() {},
  statusIsUnauthorized() {},
  message() {},
};
