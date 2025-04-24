declare type SuccessfullyResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

// for verify pass end point
declare type SuccessfullVerify = {
  status: "success";
};

// for metadata
declare type PaginatedResponse<T> = {
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
} & T;

declare type ApiResponse<T> = SuccessfullyResponse<T> | ErrorResponse;

declare type ApiVerify = SuccessfullVerify | ErrorResponse;
