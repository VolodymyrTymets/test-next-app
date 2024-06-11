import { onAppStart } from '@/app/_onAppStart';

export async function bootstrap() {
  await onAppStart();
}

bootstrap();
