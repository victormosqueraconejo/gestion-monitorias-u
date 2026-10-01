import Topic from '../models/topic.model'
import { createCrudController } from './crud.controller'

export const {
  list: listTopics,
  getById: getTopicById,
  create: createTopic,
  update: updateTopic,
  remove: deleteTopic,
} = createCrudController(Topic, 'tema')
