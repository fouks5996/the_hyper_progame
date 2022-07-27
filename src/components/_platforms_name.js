export const getParentPlatformsName = (data) => {
	return data.parent_platforms.map((el) => el.platform).map((el) => el.name);
};
