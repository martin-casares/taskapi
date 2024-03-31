import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [ControllerModule],
  providers: [TasksService]
})
export class TasksModule {}
