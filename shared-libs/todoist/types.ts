export interface Project {
  id: string;
  can_assign_tasks: boolean;
  child_order: number;
  color: string;
  creator_uid: string;
  created_at: string;
  is_archived: boolean;
  is_deleted: boolean;
  is_favorite: boolean;
  is_frozen: boolean;
  name: string;
  updated_at: string;
  view_style: string;
  default_order: number;
  description: string;
  public_key: string;
  role: string;
  parent_id: string;
  inbox_project: boolean;
  is_collapsed: boolean;
  is_shared: boolean;
}

export interface GetTasksParams {
  /** Only fetch tasks that are part of this project */
  project_id?: string;
  /** Only fetch tasks that are part of this section */
  section_id?: string;
  /** Only fetch tasks that are sub-tasks of this task */
  parent_id?: string;
  /** Only fetch tasks that have this label */
  label?: string;
}

export interface CreateTaskParams {
  /** The text contents of the task */
  content: string;
  /** The ID of the project to create the task in */
  project_id: string;
}

export interface Task {
  user_id: string;
  id: string;
  project_id: string;
  section_id: string;
  parent_id: string;
  added_by_uid: string;
  assigned_by_uid: string;
  responsible_uid: string;
  labels: Array<string>;
  deadline: {
    property1: string;
    property2: string;
  };
  duration: {
    property1: number;
    property2: number;
  };
  checked: boolean;
  is_deleted: boolean;
  added_at: string;
  completed_at: string;
  updated_at: string;
  priority: number;
  child_order: number;
  content: string;
  description: string;
  note_count: number;
  day_order: number;
  is_collapsed: boolean;
}

export interface Label {
  id: string;
  name: string;
  color: string;
  order: number;
  is_favorite: boolean;
}

export interface ListLabelsParams {
  cursor?: string;
}

export type ListLabelsReturn = Promise<{
  results: Label[];
  next_cursor?: string;
}>;
