import BaseHttpService from './base-http.service';
import queryString from 'query-string';

export namespace Typ {
  export interface task {
    title: string;
    description: number | string;
    status: string;
  }
}
export default class TasksService extends BaseHttpService {
  fetchTasks({ status, search }: { status: string; search: string }) {
    const queryObj = {} as any;
    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('tasks' + (queryStr ? `?${queryStr}` : ''));
  }

  async deleteTask(id: string) {
    await this.delete(`tasks/${id}`);
  }

  updateTaskStatus(id: string, status: string) {
    return this.patch(`tasks/${id}/status`, { status });
  }

  createTask(title: Typ.task, description: Typ.task) {
    return this.post(`tasks`, { title, description });
  }
}
