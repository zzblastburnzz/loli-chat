package com.congthanhhp92.lolichat;

import android.app.Application;
import com.facebook.react.ReactPackage;
import java.util.Collections;
import java.util.List;

public class PackageList {
  private Application application;

  public PackageList(Application application) {
    this.application = application;
  }

  public List<ReactPackage> getPackages() {
    return Collections.emptyList(); // Nếu chưa có package custom
  }
}
