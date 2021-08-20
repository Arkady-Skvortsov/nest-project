import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export default class AuthValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
