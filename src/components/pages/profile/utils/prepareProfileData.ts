import { UpdateUserDTO, Social } from '@/app/api/users/users-api-types';
import { TProfile } from '@/lib/schemas/profile.schemas';

export const prepareProfileData = (
  values: TProfile,
  originalValues: Partial<TProfile>
): Partial<UpdateUserDTO> => {
  const data: Partial<UpdateUserDTO> = {};

  if (values.userName !== originalValues.userName) {
    data.username = values.userName;
  }

  if (values.city !== originalValues.city) {
    data.city = values.city;
  }

  if (values.aboutMe !== originalValues.aboutMe) {
    data.aboutMe = values.aboutMe;
  }

  const socials: Social[] = Object.entries(values.socials || {}).reduce(
    (acc, [name, url]) => {
      const originalUrl =
        originalValues.socials?.[name as keyof typeof values.socials];
      if (url && url !== originalUrl) {
        acc.push({ name, link: url });
      }
      return acc;
    },
    [] as Social[]
  );
  if (socials.length > 0) {
    data.socials = socials;
  }

  const originalGenreIds = originalValues.genres?.filter(
    (genre): genre is string => !!genre
  );
  const currentGenreIds = values.genres.filter(
    (genre): genre is string => !!genre
  );
  if (JSON.stringify(originalGenreIds) !== JSON.stringify(currentGenreIds)) {
    data.genreIds = currentGenreIds;
  }
  if (values.avatarFile) {
    data.avatarFile = values.avatarFile[0];
  }

  if (values.bannerFile?.length) {
    data.profileBackgroundFile = values.bannerFile[0];
  }

  return data;
};
