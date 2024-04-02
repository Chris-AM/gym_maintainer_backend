import { PlanEntity } from './plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Observable } from 'rxjs';
export abstract class PlanDataSource {
  abstract createPlan(createPlanDto: CreatePlanDto): Observable<PlanEntity>;
  abstract getPlanById(planId: string): Observable<PlanEntity>;
  abstract getPlans(): Observable<PlanEntity[]>;
  abstract updatePlan(
    planId: string,
    updatePlanDto: UpdatePlanDto,
  ): Observable<PlanEntity>;
  abstract deletePlan(planId: string): Observable<PlanEntity>;
}
