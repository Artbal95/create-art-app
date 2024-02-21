const getPaths = (userDir: string): { wPath: string; uPath: string; dest: string } => {
  const currWorkingDir = process.cwd();
  const finallyUserDir = userDir === "." ? "" : `\\${userDir}`;

  return {
    wPath: currWorkingDir,
    uPath: finallyUserDir,
    dest: currWorkingDir + finallyUserDir
  };
};

export default getPaths;
