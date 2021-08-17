import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      // @ts-expect-error The command may receive a unknown type, but we are going to accept anyway.
      avatarFilename: request.file.filename,
    });
    // @ts-expect-error Used to not leak sensitive data
    delete user.password;

    return response.json(user);
  }
}
