import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    if (value.length > 10) {
      return value.slice(0, 10) + "...";
    }
    return value;
  }
}
