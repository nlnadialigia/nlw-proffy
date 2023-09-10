import {Router} from "express";
import {db} from "./database/connection";
import {convertHourToMinute} from "./utils/convertHourToMinutes";

const routes = Router();

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

routes.post("/classes", async (request, response) => {
  const {name, avatar, whatsapp, bio, subject, cost, schedule} = request.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx("users").insert({name, avatar, whatsapp, bio});
    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx("classes").insert({subject, cost, user_id});
    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((item: ScheduleItem) => {
      return {
        class_id,
        week_day: item.week_day,
        from: convertHourToMinute(item.from),
        to: convertHourToMinute(item.to)
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    response.status(201).send();
  } catch (error) {
    await trx.rollback();
    return response.status(400).json({error: "Unexpected error while creating a new class", type: error});
  }
});

export {routes};
