import { InternalError } from './internal-error';

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage = 'Unexpected error when trying to communicate to API GitHub';
    super(`${internalMessage}: ${message}`);
  }
}