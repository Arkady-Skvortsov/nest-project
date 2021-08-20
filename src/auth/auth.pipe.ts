import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export default class AuthValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
